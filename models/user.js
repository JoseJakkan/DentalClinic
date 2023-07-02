"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Roles, {
        as: "role",
        foreignKey: "roles_id",
      });
    }
    static associate(models) {
      User.hasMany(models.Appointment, {
        as: "user",
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      user_name: DataTypes.STRING,
      user_last_name: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
      position: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
    }
  );
  return User;
};
