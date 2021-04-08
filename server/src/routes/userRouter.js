const express = require('express');
const userControllers = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.get('/me', userControllers.getMe);
userRouter.patch('/me/pictures', userControllers.updateProfilePictures);
userRouter.get('/feed', userControllers.getProfileFeed);

module.exports = userRouter;
