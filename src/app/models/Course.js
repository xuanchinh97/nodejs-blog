const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String, maxlength: 255, required: true },
        description: { type: String, maxlength: 600 },
        img: { type: String, maxlength: 600 },
        videoId: { type: String, maxlength: 600, required: true },
        level: { type: String, maxlength: 600 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });
Course.plugin(AutoIncrement);

module.exports = mongoose.model('Course', Course);
