const express = require('express');
const tagControllers = require('../controllers/tagControllers');

const tagRouter = express.Router();

tagRouter.get('/search', tagControllers.searchTags);

tagRouter.put('/add', tagControllers.addTag);

tagRouter.delete('/remove', tagControllers.removeTagFromUser);

module.exports = tagRouter;
