import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Category from '../models/blogCatModel';
import validateMongoDbId from '../utils/validateMongodbId';

const createCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error as string);
  }
});

const updateCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error as string);
  }
});

const deleteCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error as string);
  }
});

const getCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await Category.findById(id);
    res.json(getaCategory);
  } catch (error) {
    throw new Error(error as string);
  }
});

const getAllCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const getAllCategory = await Category.find();
    res.json(getAllCategory);
  } catch (error) {
    throw new Error(error as string);
  }
});

export {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
};
