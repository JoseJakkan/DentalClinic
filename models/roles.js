"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Role {1}--{1..n} User
      Roles.hasMany(models.User, {
        as: "user",
        foreignKey: "role_id", // foreingnKey in the model User
      });
    }
  }
  Roles.init(
    {
      roles: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
      tableName: "roles",
    }
  );
  return Roles;
};
