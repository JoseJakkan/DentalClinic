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
      // User {1..n}--{1} Role
      User.belongsTo(models.Roles, {
        as: "roles",
        foreignKey: "role_id", // foreignKey in the model User
      });

      // User {1}--{1..n} Staff
      User.hasMany(models.Staff, {
        as: "user",
        foreignKey: "user_id", // foreignKey de Staff
      });

      // User {1}--{1..n} Patients
      User.hasMany(models.Patient, {
        as: "patient",
        foreignKey: "patient_id", // foreignKey de Patient
      });
    }
  }
  User.init(
    {
      user_name: DataTypes.STRING,
      user_last_name: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
    }
  );
  return User;
};
