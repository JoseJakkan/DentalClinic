const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:laerde100@127.0.0.1/ClinicaDental"
);

module.exports = sequelize;
