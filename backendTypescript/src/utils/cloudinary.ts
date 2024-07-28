const cloudinary = require("cloudinary").v2; // Use v2 for the latest API

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
});

const cloudinaryUploadImg = async (fileToUploads) => {
  try {
    const result = await cloudinary.uploader.upload(fileToUploads, {
      resource_type: "auto",
    });
    return {
      url: result.secure_url,
      asset_id: result.asset_id,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Cloudinary upload failed");
  }
};

const cloudinaryDeleteImg = async (fileToDelete) => {
  try {
    const result = await cloudinary.uploader.destroy(fileToDelete, {
      resource_type: "auto",
    });
    return {
      result: result.result,
    };
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Cloudinary delete failed");
  }
};

module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
