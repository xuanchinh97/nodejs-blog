const Course = require('../models/Course');

class SiteController {
    // [GET] /home
    index(req, res) {
        // res.render('home');
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.send({ err: 'lỗi' });
            }
        });
    }

    // [get] /homes:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
