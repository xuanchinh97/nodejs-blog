class NewsController {
    // [GET] /new
    index(req, res) {
        res.render('news');
    }

    // [get] /news:slug
    show(req, res) {
        res.send('defualt');
    }
}

module.exports = new NewsController();
