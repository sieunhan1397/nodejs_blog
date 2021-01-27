const Course = require('../models/Course')
class SiteController {
  //[GET] /index
  index(req, res): void {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses)
        return
      }
      res.status(400).json({
        error: 'ERROR!!!',
      })
    })
    // res.render('home');
  }
  //[GET] /search
  search(req, res): void {
    res.render('search')
  }
}

module.exports = new SiteController()
