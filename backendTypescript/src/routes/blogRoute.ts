const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/", createBlog);
router.put(
  "/upload/:id",
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
router.put("/likes", liketheBlog);
router.put("/dislikes",  disliketheBlog);

router.put("/:id",updateBlog);

router.get("/:id", getBlog);
router.get("/", getAllBlogs);

router.delete("/:id", deleteBlog);

module.exports = router;
