"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Patient {0..1}..{0..1} Appointment
      Patient.belongsTo(models.Appointment, {
        as: "appointment",
        foreignKey: "patients_id", //ForeingKey in the model Appointment
      });
    }
  }
  Patient.init(
    {
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patient",
      tableName: "patient",
    }
  );
  return Patient;
};
