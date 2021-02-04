export {}
const Course = require('../models/Course')

class CourseController {
  //[GET] /courses/:slugs
  async show(req, res): Promise<void> {
    try {
      const course = await Course.findOne({ slug: req.params.slug })
        .lean()
        .exec()
      res.render('courses/show', { course })
    } catch (e) {}
  }
}

module.exports = new CourseController()
