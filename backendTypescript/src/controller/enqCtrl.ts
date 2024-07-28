// enquiryCtrl.ts
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import validateMongoDbId from '../utils/validateMongodbId';
import Enquiry from '../models/enqModel';

const createEnquiry = asyncHandler(async (req: Request, res: Response) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

const updateEnquiry = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteEnquiry = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    res.json(deletedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

const getEnquiry = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaEnquiry = await Enquiry.findById(id);
    res.json(getaEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllEnquiry = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getAllEnquiry = await Enquiry.find();
    res.json(getAllEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

export {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getAllEnquiry,
};
