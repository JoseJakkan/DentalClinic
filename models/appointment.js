"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Appointments {0..1}..{0..1} Patient
      Appointment.hasMany(models.Patient, {
        as: "appointment",
        foreignKey: "appointment_id", //ForeingKey in the model patients
      });
    }
    static associate(models) {
      //Appointment {0..1}..{0..1} Staff
      Appointment.hasMany(models.Staff, {
        as: "appointment",
        foreignKey: "appointment_id", //ForeingKey in the model patients
      });
    }
  }
  Appointment.init(
    {
      patient_id: DataTypes.INTEGER,
      staff_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Appointment",
      tableName: "appointment",
    }
  );
  return Appointment;
};
