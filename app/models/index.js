const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.tutorials = require("./tutorial.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.products = require("./product.model.js")(mongoose);
db.staticData = require("./staticData.model.js")(mongoose);

module.exports = db;
