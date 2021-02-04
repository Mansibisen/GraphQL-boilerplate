const mongoose = require("mongoose");
// require all the models here
const User = require("./User");

mongoose.Promise = global.Promise;
const models = {
    // all models to be included here
    User,
};

const StartDB = ({ url, db }) => {
    mongoose.connect(`mongodb://${url}/${db}`);
};

module.exports = { models, StartDB };
