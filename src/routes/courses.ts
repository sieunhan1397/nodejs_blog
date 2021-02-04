export {}
const courseRouter = require('express').Router()
const courseController = require('../app/controllers/CourseController')

courseRouter.get('/:slug', courseController.show)

module.exports = courseRouter
