import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel';
import User from '../models/userModel';
import validateMongoDbId from '../utils/validateMongodbId';
import cloudinaryUploadImg from '../utils/cloudinary';
import fs from 'fs';

const createBlog = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error as string);
  }
});

const updateBlog = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error as string);
  }
});

const getBlog = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBlog = await Blog.findById(id).populate('likes').populate('dislikes');
    await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error as string);
  }
});

const getAllBlogs = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  try {
    const getBlogs = await Blog.find();
    res.json(getBlogs);
  } catch (error) {
    throw new Error(error as string);
  }
});

const deleteBlog = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error as string);
  }
});

const liketheBlog = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);
  const blog = await Blog.findById(blogId);
  const loginUserId = req.user?._id;
  const isLiked = blog?.isLiked;
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (alreadyDisliked) {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
  }

  if (isLiked) {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
  } else {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
  }

  const updatedBlog = await Blog.findById(blogId);
  res.json(updatedBlog);
});

const disliketheBlog = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);
  const blog = await Blog.findById(blogId);
  const loginUserId = req.user?._id;
  const isDisLiked = blog?.isDisliked;
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (alreadyLiked) {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
  }

  if (isDisLiked) {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
  } else {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
  }

  const updatedBlog = await Blog.findById(blogId);
  res.json(updatedBlog);
});

const uploadImages = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const uploader = (path: string) => cloudinaryUploadImg(path, 'images');
    const urls = [];
    const files = req.files as Express.Multer.File[];
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      console.log(newpath);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const findBlog = await Blog.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      {
        new: true,
      }
    );
    res.json(findBlog);
  } catch (error) {
    throw new Error(error as string);
  }
});

export {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
};
