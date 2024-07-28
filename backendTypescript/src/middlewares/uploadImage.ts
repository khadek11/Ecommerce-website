import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import util from "util";
import { Request, Response, NextFunction } from "express";
import { cloudinaryUploadImg } from "../utils/cloudinary";

const unlinkAsync = util.promisify(fs.unlink);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/temp/")); // Use a temporary directory for uploading files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

const productImgResize = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.files) return next();

  try {
    const urls: string[] = [];
    await Promise.all(
      (req.files as Express.Multer.File[]).map(async (file) => {
        const outputPath = `public/images/products/${file.filename}`;
        await sharp(file.path)
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(outputPath);

        // Upload to Cloudinary
        const uploadedImage = await cloudinaryUploadImg(outputPath);
        urls.push(uploadedImage);

        // Clean up local files
        await fs.promises.unlink(file.path); // Remove the temporary uploaded file
        await fs.promises.unlink(outputPath); // Remove the resized file
      })
    );
    req.body.images = urls;
    next();
  } catch (error) {
    console.error("Error processing images:", error);
    next(error);
  }
};

const blogImgResize = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.files) return next();
  await Promise.all(
    (req.files as Express.Multer.File[]).map(async (file) => {
      const outputPath = `public/images/blogs/${file.filename}`;
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);
      await fs.promises.unlink(file.path); // Remove the temporary uploaded file
    })
  );
  next();
};

export { uploadPhoto, productImgResize, blogImgResize };
