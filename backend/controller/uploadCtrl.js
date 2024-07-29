// imageController.js

const cloudinary = require("cloudinary").v2; // Use v2 for the latest API
const uuidv4 = require("uuid").v4;
const Image = require('../models/images')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
});

async function uploadImages(req, res, next) {
  try {
    const files = req.files;
    const imgDetails = [];

    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "your_folder_name",
        public_id: `image-${uuidv4()}`,
      });

      // Store image details in MongoDB
      const newImage = new Image({
        public_id: result.public_id,
        url: result.secure_url,
      });

      const savedImage = await newImage.save();
      imgDetails.push(savedImage);
    }

    res.status(201).json(imgDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to upload images: " + err.message,
      status: false,
    });
  }
}

module.exports = uploadImages;
