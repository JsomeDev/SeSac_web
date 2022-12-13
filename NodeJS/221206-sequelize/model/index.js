const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

// config = {
//     "host": "localhost",
//     "database": "somdata",
//     "username": "user",
//     "password": "mama5110",
//     "dialect": "mysql"
// }

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);


// db = {
//     "Sequelize": Sequelize,
//     "sequelize": sequelize
//      "Visitor": "Visitor.js"에서 return 받은 값
// }

module.exports = db;


