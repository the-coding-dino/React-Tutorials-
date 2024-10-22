const express = require("express");
const router = express.Router();
const { uploadImage, uploader } = require('../controllers/imageController')

router.post('/upload', uploader.single('file'), uploadImage)

module.exports = router