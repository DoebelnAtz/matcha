const express = require('express');
const userControllers = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.get('/me', userControllers.getMe);
userRouter.get('/feed', userControllers.getProfileFeed);

userRouter.patch('/me/pictures', userControllers.updateProfilePictures);

userRouter.put('/me', userControllers.updateProfile);
userRouter.put('/like', userControllers.likeUser);

module.exports = userRouter;
