export{}
const newsRouter = require('express').Router();
const newsController = require('../app/controllers/NewsController');

newsRouter.use('/:slug', newsController.show);
newsRouter.use('/', newsController.index);

module.exports = newsRouter;