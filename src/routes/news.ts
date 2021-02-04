export {}
const newsRouter = require('express').Router()
const newsController = require('../app/controllers/NewsController')

newsRouter.get('/:slug', newsController.show)
newsRouter.get('/', newsController.index)

module.exports = newsRouter
