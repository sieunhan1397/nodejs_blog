export{};
const siteRouter = require('express').Router();
const siteController = require('../app/controllers/SiteController');

siteRouter.use('/:slug', siteController.search);
siteRouter.use('/', siteController.index);

module.exports = siteRouter;