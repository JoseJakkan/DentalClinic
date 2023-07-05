"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      // Patient {01}--{1} User
      Patient.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id", // foreignKey de Patient
      });

      // Patient {0..n}--{1..n} Appointments
      Patient.hasOne(models.Appointment, {
        through: "appointments",
        foreignKey: "patient_id", // foreignKey en Appointments
      });
    }
  }
  Patient.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Patient",
      tableName: "patients",
    }
  );
  return Patient;
};
