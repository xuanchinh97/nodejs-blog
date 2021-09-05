module.exports = {
    mutipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    mongooseToOject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
