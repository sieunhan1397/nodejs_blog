const Course = require('../models/Course')
const { mongoosesToObject } = require('../../utils/mongoose')
class SiteController {
  //[GET] /index
  index(req, res): void {
    // Course.find({})
    //     .then(courses => res.render('home', {
    //       courses: mongoosesToObject(courses)
    //     }))
    //     .catch(err => console.log(err));
    Course.find({})
      .lean()
      .then((courses) => res.render('home', { courses }))
      .catch((err) => console.log(err))
  }
  //[GET] /search
  search(req, res): void {
    res.render('search')
  }
}

module.exports = new SiteController()
