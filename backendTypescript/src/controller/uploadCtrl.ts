// uploadCtrl.ts
import fs from 'fs';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { cloudinaryUploadImg, cloudinaryDeleteImg } from '../utils/cloudinary';

const uploadImages = asyncHandler(async (req: Request, res: Response) => {
  try {
    const uploader = (path: string) => cloudinaryUploadImg(path, "images");
    const urls: string[] = [];
    const files = req.files as Express.Multer.File[];

    console.log("Files received:", files); // Debug statement

    for (const file of files) {
      const { path } = file;
      if (fs.existsSync(path)) { // Check if the file exists before trying to upload it
        const newpath = await uploader(path);
        console.log("Uploaded path:", newpath); // Debug statement
        urls.push(newpath);
        await fs.promises.unlink(path); // Use fs.promises.unlink instead of fs.unlinkSync
      } else {
        console.error(`File not found: ${path}`);
      }
    }
    const images = urls.map((file) => {
      return file;
    });

    console.log("Images array:", images); // Debug statement

    res.json(images);
  } catch (error) {
    console.error("Error uploading images:", error); // Debug statement
    throw new Error(error);
  }
});

const deleteImages = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Error deleting images:", error); // Debugging line
    throw new Error(error);
  }
});

export { uploadImages, deleteImages };
