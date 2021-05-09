const express = require('express');
const tagControllers = require('../controllers/tagControllers');

const tagRouter = express.Router();

tagRouter.get('/search', tagControllers.searchTags);

tagRouter.put('/tag', tagControllers.addTag);

module.exports = tagRouter;
