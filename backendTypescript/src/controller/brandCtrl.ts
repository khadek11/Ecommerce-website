// brandController.ts
import { Request, Response } from 'express';
import Brand from '../models/brandModel';
import asyncHandler from 'express-async-handler';
import validateMongoDbId from '../utils/validateMongodbId';

const createBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const updateBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const getBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaBrand = await Brand.findById(id);
    res.json(getaBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const getallBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const getallBrand = await Brand.find();
    res.json(getallBrand);
  } catch (error) {
    throw new Error(error);
  }
});

export {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
};
