import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import uniqid from "uniqid";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import User from "../models/userModel";
import Product from "../models/productModel";
import Cart from "../models/cartModel";
import Coupon from "../models/couponModel";
import Order from "../models/orderModel";
import { generateToken } from "../config/jwtToken";
import { generateRefreshToken } from "../config/refreshtoken";
import validateMongoDbId from "../utils/validateMongodbId";
import sendEmail from "./emailCtrl";

// Create a User
const createUser = asyncHandler(async (req: Request, res: Response) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email });

  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

// Login a user
const loginUserCtrl = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser._id);
    await User.findByIdAndUpdate(
      findUser.id,
      { refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser._id,
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      email: findUser.email,
      mobile: findUser.mobile,
      token: generateToken(findUser._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// Admin login
const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const findAdmin = await User.findOne({ email });
  if (findAdmin?.role !== "admin") throw new Error("Not Authorised");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin._id);
    await User.findByIdAndUpdate(
      findAdmin.id,
      { refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin._id,
      firstname: findAdmin.firstname,
      lastname: findAdmin.lastname,
      email: findAdmin.email,
      mobile: findAdmin.mobile,
      token: generateToken(findAdmin._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// Handle refresh token
const handleRefreshToken = asyncHandler(async (req: Request, res: Response) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error("No Refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded: any) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user._id);
    res.json({ accessToken });
  });
});

// Logout functionality
const logout = asyncHandler(async (req: Request, res: Response) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });
    return res.sendStatus(204); // forbidden
  }
  await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });
  res.clearCookie("refreshToken", { httpOnly: true, secure: true });
  res.sendStatus(204); // forbidden
});

// Update a user
const updatedUser = asyncHandler(async (req: Request, res: Response) => {
  const { _id } = req.user as any;
  validateMongoDbId(_id);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error as string);
  }
});

// Save user address
const saveAddress = asyncHandler(async (req: Request, res: Response) => {
  const { _id } = req.user as any;
  validateMongoDbId(_id);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { address: req.body.address },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error as string);
  }
});

// Get all users
const getallUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getUsers = await User.find().populate("wishlist");
    res.json(getUsers);
  } catch (error) {
    throw new Error(error as string);
  }
});

// Get a single user
const getaUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const getaUser = await User.findById(id);
    res.json({ getaUser });
  } catch (error) {
    throw new Error(error as string);
  }
});

// Delete a single user
const deleteaUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({ deleteaUser });
  } catch (error) {
    throw new Error(error as string);
  }
});

// Block a user
const blockUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const blockusr = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );
    res.json(blockusr);
  } catch (error) {
    throw new Error(error as string);
  }
});

// Unblock a user
const unblockUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    res.json({ message: "User UnBlocked" });
  } catch (error) {
    throw new Error(error as string);
  }
});

// Update password
const updatePassword = asyncHandler(async (req: Request, res: Response) => {
  const { _id } = req.user as any;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// Forgot password token
const forgotPasswordToken = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found with this email");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      html: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error as string);
  }
});

// Reset password
const resetPassword = asyncHandler(async (req: ResetPasswordRequest, res: Response) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
  
    if (!user) throw new Error("Token Expired, Please try again later");
  
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
  
    await user.save();
    res.json(user);
  });
  
  const getWishlist = asyncHandler(async (req: GetWishlistRequest, res: Response) => {
    const { _id } = req.user;
  
    try {
      const findUser = await User.findById(_id).populate("wishlist");
      res.json(findUser);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const userCart = asyncHandler(async (req: UserCartRequest, res: Response) => {
    const { cart } = req.body;
    const { _id } = req.user;
  
    validateMongoDbId(_id);
  
    try {
      let products: Array<any> = [];
      const user = await User.findById(_id);
  
      const alreadyExistCart = await Cart.findOne({ orderby: user._id });
  
      if (alreadyExistCart) {
        alreadyExistCart.remove();
      }
  
      for (let i = 0; i < cart.length; i++) {
        let object: any = {};
        object.product = cart[i]._id;
        object.count = cart[i].count;
        object.color = cart[i].color;
        let getPrice = await Product.findById(cart[i]._id).select("price").exec();
        object.price = getPrice?.price;
        products.push(object);
      }
  
      let cartTotal = 0;
      for (let i = 0; i < products.length; i++) {
        cartTotal = cartTotal + products[i].price * products[i].count;
      }
  
      let newCart = await new Cart({
        products,
        cartTotal,
        orderby: user?._id,
      }).save();
  
      res.json(newCart);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const getUserCart = asyncHandler(async (req: GetWishlistRequest, res: Response) => {
    const { _id } = req.user;
  
    validateMongoDbId(_id);
  
    try {
      const cart = await Cart.findOne({ orderby: _id }).populate("products.product");
      res.json(cart);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const emptyCart = asyncHandler(async (req: GetWishlistRequest, res: Response) => {
    const { _id } = req.user;
  
    validateMongoDbId(_id);
  
    try {
      const user = await User.findOne({ _id });
      const cart = await Cart.findOneAndRemove({ orderby: user._id });
      res.json(cart);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const applyCoupon = asyncHandler(async (req: ApplyCouponRequest, res: Response) => {
    const { coupon } = req.body;
    const { _id } = req.user;
  
    validateMongoDbId(_id);
  
    const validCoupon = await Coupon.findOne({ name: coupon });
  
    if (validCoupon === null) {
      throw new Error("Invalid Coupon");
    }
  
    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({
      orderby: user._id,
    }).populate("products.product");
  
    let totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);
  
    await Cart.findOneAndUpdate(
      { orderby: user._id },
      { totalAfterDiscount },
      { new: true }
    );
  
    res.json(totalAfterDiscount);
  });
  
  const createOrder = asyncHandler(async (req: CreateOrderRequest, res: Response) => {
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
  
    validateMongoDbId(_id);
  
    try {
      if (!COD) throw new Error("Create cash order failed");
  
      const user = await User.findById(_id);
      let userCart = await Cart.findOne({ orderby: user._id });
  
      let finalAmount = 0;
      if (couponApplied && userCart?.totalAfterDiscount) {
        finalAmount = userCart.totalAfterDiscount;
      } else {
        finalAmount = userCart?.cartTotal;
      }
  
      let newOrder = await new Order({
        products: userCart?.products,
        paymentIntent: {
          id: uniqid(),
          method: "COD",
          amount: finalAmount,
          status: "Cash on Delivery",
          created: Date.now(),
          currency: "usd",
        },
        orderby: user._id,
        orderStatus: "Cash on Delivery",
      }).save();
  
      let update = userCart?.products.map((item: any) => {
        return {
          updateOne: {
            filter: { _id: item.product._id },
            update: { $inc: { quantity: -item.count, sold: +item.count } },
          },
        };
      });
  
      const updated = await Product.bulkWrite(update, {});
      res.json({ message: "success" });
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const getOrders = asyncHandler(async (req: GetOrdersRequest, res: Response) => {
    const { _id } = req.user;
  
    validateMongoDbId(_id);
  
    try {
      const userOrders = await Order.findOne({ orderby: _id })
        .populate("products.product")
        .populate("orderby")
        .exec();
  
      res.json(userOrders);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const getAllOrders = asyncHandler(async (req: Request, res: Response) => {
    try {
      const allUserOrders = await Order.find()
        .populate("products.product")
        .populate("orderby")
        .exec();
  
      res.json(allUserOrders);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const getOrderByUserId = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
  
    validateMongoDbId(id);
  
    try {
      const userOrders = await Order.findOne({ orderby: id })
        .populate("products.product")
        .populate("orderby")
        .exec();
  
      res.json(userOrders);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  const updateOrderStatus = asyncHandler(async (req: UpdateOrderStatusRequest, res: Response) => {
    const { status } = req.body;
    const { id } = req.params;
  
    validateMongoDbId(id);
  
    try {
      const updatedOrderStatus = await Order.findByIdAndUpdate(
        id,
        {
          orderStatus: status,
          paymentIntent: {
            status: status,
          },
        },
        { new: true }
      );
  
      res.json(updatedOrderStatus);
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
  export {
    resetPassword,
    getWishlist,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    getAllOrders,
    getOrderByUserId,
    updateOrderStatus,
  };