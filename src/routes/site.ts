export {}
const siteRouter = require('express').Router()
const siteController = require('../app/controllers/SiteController')

siteRouter.get('/:slug', siteController.search)
siteRouter.get('/', siteController.index)

module.exports = siteRouter
