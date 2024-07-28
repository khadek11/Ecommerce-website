// colorController.ts
import { Request, Response } from 'express';
import Color from '../models/colorModel';
import asyncHandler from 'express-async-handler';
import validateMongoDbId from '../utils/validateMongodbId';

const createColor = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

const updateColor = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteColor = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});

const getColor = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaColor = await Color.findById(id);
    res.json(getaColor);
  } catch (error) {
    throw new Error(error);
  }
});

const getallColor = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const getallColor = await Color.find();
    res.json(getallColor);
  } catch (error) {
    throw new Error(error);
  }
});

export {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
};
