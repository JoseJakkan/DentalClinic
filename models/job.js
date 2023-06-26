"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Job {1}..{1..n} Staff
      Jobs.hasMany(models.Staff, {
        as: "jobs",
        foreignKey: "job_id", //ForeingKey in the model Staff
      });
    }
  }
  Jobs.init(
    {
      job: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Job",
      tableName: "job",
    }
  );
  return Jobs;
};
