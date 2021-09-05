const mongoose = require('mongoose');

connect().catch((err) => console.log(err));

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/nodejsBlog');
    console.log('connect successfully');
}

module.exports = { connect };
