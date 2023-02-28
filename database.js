const Sequelize = require("sequelize");

// Database connection from MYsql
let hostname = "localhost";
let database = "employee_cards";
let username = "root";
let password = "sunshine226644";

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;