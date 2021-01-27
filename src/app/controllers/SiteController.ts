
class SiteController {
    //[GET] /index
    index(req, res):void {
        res.render('home');
    }
    //[GET] /search
    search(req, res):void {
        res.render('search');
    }
}

module.exports = new SiteController;