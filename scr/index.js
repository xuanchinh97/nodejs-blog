const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const path = require('path')



const app = express()

//khai báo url tĩnh
app.use(express.static(path.join(__dirname, 'public')))

//sử dụng margo để log
app.use(morgan('combined'))

//sử dụng express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set url source file
app.set('views', path.join(__dirname, 'sources/views'))

//tên trang trangchu và render ra home
app.get('/trang-chu', function (req, res) {
    res.render('home');
});

//tên trang tintuc và render ra news
app.get('/tin-tuc', function (req, res) {
    res.render('news');
});

app.listen(3000)