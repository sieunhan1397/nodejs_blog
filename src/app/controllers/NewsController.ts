class NewsController {
  //[GET] /news
  index(req, res):void {
    res.render('news');
  }
  //[GET] /news/:slugs
  show(req, res):void {
    res.send('News Detail');
  }
}

module.exports = new NewsController;
