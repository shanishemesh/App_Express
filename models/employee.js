const { DataTypes } = require("sequelize");
const sequelize = require("../database.js");

const Employee = sequelize.define("Employee", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {timestamps: false});
  
  module.exports = Employee;
  