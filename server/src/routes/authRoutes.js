const express = require('express');
const authControllers = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.post('/signup', authControllers.signUp);
authRouter.post('/login', authControllers.logIn);
authRouter.post('/verify/:uid', authControllers.verifyUser);

module.exports = authRouter;
