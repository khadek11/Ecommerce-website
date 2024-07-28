// couponController.ts
import { Request, Response } from 'express';
import Coupon from '../models/couponModel';
import validateMongoDbId from '../utils/validateMongodbId';
import asyncHandler from 'express-async-handler';

const createCoupon = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllCoupons = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});

const updateCoupon = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCoupon = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deleteCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const getCoupon = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getACoupon = await Coupon.findById(id);
    res.json(getACoupon);
  } catch (error) {
    throw new Error(error);
  }
});

export {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  getCoupon,
};
