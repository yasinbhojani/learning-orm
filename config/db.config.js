const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING);

module.exports = sequelize;
