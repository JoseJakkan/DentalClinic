"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User {1..n}--{1} Role
      User.belongsTo(models.Role, {
        as: "role",
        foreignKey: "role_id", // foreignKey de User
      });

      // User {1}..{01} Doctor
      User.hasOne(models.Doctor, {
        as: "doctor",
        foreignKey: "user_id", // foreignKey en Doctor
      });

      // User {1}..{01} Patient
      User.hasOne(models.Patient, {
        as: "patient",
        foreignKey: "user_id", // foreignKey en Patient
      });
    }
  }
  User.init(
    {
      user_name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Name not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      user_lastname: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Last name not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      birthdate: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email not valid",
          },
        },
      },
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
