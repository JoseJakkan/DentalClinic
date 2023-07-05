"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Role {1}--{1..n} User
      Role.hasMany(models.User, {
        as: "user",
        foreignKey: "role_id", // foreingnKey en el modelo User
      });
    }
  }
  Role.init(
    {
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "roles",
    }
  );
  return Role;
};
