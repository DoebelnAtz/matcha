const express = require('express');
const testControllers = require('../controllers/testController');

const testRouter = express.Router();

testRouter.get('/', testControllers.test);

module.exports = testRouter;