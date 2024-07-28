const express = require("express");
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
} = require("../controller/colorCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createColor);
router.put("/:id", updateColor);
router.delete("/:id",  deleteColor);
router.get("/:id", getColor);
router.get("/", getallColor);

module.exports = router;
