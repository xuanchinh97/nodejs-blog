const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const path = require('path')

const route = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//khai báo url tĩnh
app.use(express.static(path.join(__dirname, 'public')))

//sử dụng margo để log
// app.use(morgan('combined'))

//sử dụng express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set url source file
app.set('views', path.join(__dirname, 'sources/views'))

route(app)

app.listen(3000)