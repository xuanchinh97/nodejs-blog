class SiteController {
    // [GET] /home
    index(req, res) {
        res.render('home');
    }

    // [get] /homes:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
