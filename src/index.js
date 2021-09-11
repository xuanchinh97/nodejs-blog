const express = require('express');
var methodOverride = require('method-override');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const sortMiddleware = require('./app/middlewares/SortMiddleware');

//connect to db
const route = require('./routes');
const db = require('./config/db');
const { ExpressHandlebars } = require('express-handlebars');
db.connect();

const app = express();

//sử dụng [PUT] và [Delete]
app.use(methodOverride('_method'));

app.engine(
    'handlebars',
    exphbs({
        helpers: {
            sum: (a, b) => a + b,
            sortTable(field, sort) {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'fas fa-sort',
                    asc: 'fas fa-sort-up',
                    desc: 'fas fa-sort-down',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sortType];
                return `<a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>`;
            },
        },
    }),
);
//sử dụng express-handlebars
app.set('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//khai báo url tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//sử dụng margo để log
// app.use(morgan('combined'))

//set url source file
app.set('views', path.join(__dirname, 'sources/views'));

//custom middleware
app.use(sortMiddleware);

route(app);

app.listen(3000);
