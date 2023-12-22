const dbConfig = require("../DBconfig/dbconfig");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

const Employee = require("./Employeemodel")(mongoose);

db.employee = Employee;

module.exports = db;
