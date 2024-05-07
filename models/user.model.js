const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.TEXT,
  },
  last_name: {
    type: DataTypes.TEXT,
  },
  dob: {
    type: DataTypes.DATE,
  },
});

// User.sync({ alter: true });
User.sync();
module.exports = User;
