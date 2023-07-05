const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("doctors");
  },
};
