// routes/uploadRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './uploads/' });
const uploadImages = require('../controller/uploadCtrl'); // Adjust the path as needed

router.post('/', upload.array('images', 12), uploadImages);

module.exports = router;
