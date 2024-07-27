const { v4: uuidv4 } = require('uuid');
const Category = require('../models/Category');
const {Productmodel} = require('../models/Product');
const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
});
router.get("/", async (req, res) => {
  try {
    const productList = await Productmodel.find().populate("category");
    res.send(productList);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve products" });
  }
});

router.post('/create', async (req, res) => {
  try {
    const category = await Category.findById(req.body.category);
    if (!category) {
      throw new Error("Invalid category");
    }

    const uploadImage = async (image) => {
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
    };

    const imageUploadPromises = req.body.images.map((image) => {
      return uploadImage(image);
    });

    const uploadedImages = await Promise.all(imageUploadPromises);
    const imageUris = uploadedImages.map((item) => item.secure_url);

    let productData = {
      name: req.body.name,
      description: req.body.description,
      images: imageUris,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isfeatured: req.body.isfeatured,
    };

    let product = new Productmodel(productData);
    product = await product.save();
    res.send(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: {
        code: 500,
        message: "Failed to create product",
        details: err.message,
      },
      success: false,
    });
  }
});

router.get('/:id', async (req, res) => {
  const product = await Productmodel.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "The product with the given id was not found" });
  }

  return res.status(200).send(product);
});


router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  let product;

  try {
    product = await Productmodel.findById(productId);
  } catch (err) {
    console.error(err);
    res.status(404).json({
      message: 'Product not found',
      status: false,
    });
    return;
  }

  if (!product) {
    res.status(404).json({
      message: 'Product not found',
      status: false,
    });
    return;
  }

  const uploadImage = async (image) => {
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
  };

  const imageUploadPromises = req.body.images.map((image) => {
    return uploadImage(image);
  });

  const uploadedImages = await Promise.all(imageUploadPromises);
  const imageUris = uploadedImages.map((item) => item.secure_url);

  try {
    product = await Productmodel.findByIdAndUpdate(
      productId,
      {
        name: req.body.name,
        description: req.body.description,
        images: imageUris,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isfeatured: req.body.isfeatured,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Product updated successfully",
      status: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to update product",
      status: false,
    });
  }
});


router.delete('/:id', async(req, res) => {
  const deleteProduct = await Productmodel.findByIdAndDelete(req.params.id);
  if(!deleteProduct){
    return res.status(404).json({
      message:"product not found",
      status: false
    })
  }
  res.status(200).send({
    message:"product is deleted",
      status: true
  })
})



module.exports = router