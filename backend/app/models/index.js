const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.player = require("./player.model");
db.team = require("./team.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;