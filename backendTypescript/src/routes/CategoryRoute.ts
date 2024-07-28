const { v4: uuidv4 } = require('uuid');
const Category = require("../models/Category");
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')

const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
});
router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();
    res.send(categoryList);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve categories" });
  }
});


router.get('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
  
    const category = await Category.findById(req.params.id);
  
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
  
    return res.status(200).send(category);
  });

router.post("/create", async (req, res) => {
    if (!req.body.name ||!req.body.images ||!req.body.color) {
      return res.status(400).json({
        error: "Please provide all required fields",
        status: false,
      });
    }
  
    const pLimitFunc = (await import("p-limit")).default;
    const limit = pLimitFunc(2);
    const imageToUpload = req.body.images.map((image) => {
      return limit(async () => {
        try {
          const result = await cloudinary.uploader.upload(image, {
            folder: "your_folder_name",
            public_id: `image-${uuidv4()}`,
          });
          return result;
        } catch (error) {
          console.error(`Error uploading image: ${error.message}`);
          throw error;
        }
      });
    });
  
    try {
      const uploadStatus = await Promise.all(imageToUpload);
      const imguri = uploadStatus.map((item) => {
        return item.secure_url;
      });
  
      let category = new Category({
        name: req.body.name,
        images: imguri,
        color: req.body.color,
      });
  
      category = await category.save();
      res.status(201).json(category);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "Failed to create category: " + err.message,
        status: false,
      });
    }
  });
  

  router.delete('/:id', async( req, res) => {
    const deletedUser = await Category.findByIdAndDelete(req.params.id)

    if(!deletedUser) {
        res.status(404).json({
            message: "Category not find!",
            success: false
        })
    }

    res.status(200).json({
        success: true,
        message: "Category Deleted"
    })
  })

  router.put("/:id", async (req, res) => {
    
  
    const pLimitFunc = (await import("p-limit")).default;
    const limit = pLimitFunc(2);
    const imageToUpload = req.body.images.map((image) => {
      return limit(async () => {
        try {
          const result = await cloudinary.uploader.upload(image, {
            folder: "your_folder_name",
            public_id: `image-${uuidv4()}`,
          });
          return result;
        } catch (error) {
          console.error(`Error uploading image: ${error.message}`);
          throw error;
        }
      });
    });
  
    try {
      const uploadStatus = await Promise.all(imageToUpload);
      const imguri = uploadStatus.map((item) => {
        return item.secure_url;
      });
  
    
      const category = await Category.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            images: imguri,
            color: req.body.color,
        }, {new: true}
      )
  
   
      res.status(201).json(category);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "Failed to update category: " + err.message,
        status: false,
      });
    }
  });
  

module.exports = router;
