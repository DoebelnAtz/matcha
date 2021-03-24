const express = require('express');
const imageControllers = require('../controllers/imageControllers');
const { sendUploadToGCS } = require('../middleware/images');
const imageRouter = express.Router();
const Multer = require('multer');

const multer = Multer({
	storage: Multer.MemoryStorage,
	limits: {
		fileSize: 5 * 1024 * 1024, // Maximum file size is 5MB
	},
});
imageRouter.post(
	'/upload',
	multer.single('file'),
	sendUploadToGCS,
	imageControllers.uploadImage,
);

module.exports = imageRouter;
