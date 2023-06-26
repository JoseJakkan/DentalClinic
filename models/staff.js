"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Staff{0..1}..{0..1} Appointment
      Staff.belongsTo(models.Appointment, {
        as: "appointment",
        foreignKey: "appointment_id", //ForeingKey in the model Staff
      });
    }
    static associate(models) {
      //Staff {1..n}..{1} Job
      Staff.belongsTo(models.Job, {
        as: "jobs",
        foreignKey: "job_id", //ForeingKey in the model Staff
      });
    }
  }
  Staff.init(
    {
      role_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      job_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Staff",
      tableName: "staff",
    }
  );
  return Staff;
};
