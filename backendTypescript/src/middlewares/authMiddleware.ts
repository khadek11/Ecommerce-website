import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

interface AuthenticatedRequest extends Request {
  user?: any;
}

const authMiddleware = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  let token: string | undefined;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(' ')[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized, token expired. Please Login");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

const isAdmin = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const user = req.user;
  const adminUser = await User.findOne({ email: user.email });
  if (adminUser.role !== "admin") {
    throw new Error('You are not an admin');
  } else {
    next();
  }
});

export { authMiddleware, isAdmin };
