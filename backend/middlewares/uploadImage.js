const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { cloudinaryUploadImg } = require("../utils/cloudinary");

const unlinkAsync = util.promisify(fs.unlink);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/temp/")); // Use a temporary directory for uploading files
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

const productImgResize = async (req, res, next) => {
  if (!req.files) return next();

  try {
    const urls = [];
    await Promise.all(
      req.files.map(async (file) => {
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

const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
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

module.exports = { uploadPhoto, productImgResize, blogImgResize };