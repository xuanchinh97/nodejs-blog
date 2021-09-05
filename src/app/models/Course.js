const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxlength: 255, required: true },
        description: { type: String, maxlength: 600 },
        img: { type: String, maxlength: 600 },
        videoId: { type: String, maxlength: 600, required: true },
        level: { type: String, maxlength: 600 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
