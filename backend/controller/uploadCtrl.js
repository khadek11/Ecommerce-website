// uploadCtrl.js
const fs = require("fs");
const asyncHandler = require("express-async-handler");
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary");

const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;

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
const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    await cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Error deleting images:", error); // Debugging line
    throw new Error(error);
  }
});

module.exports = { uploadImages, deleteImages };
