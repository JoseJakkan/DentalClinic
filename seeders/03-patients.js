const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "patients",
      [
        {
          user_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          user_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          user_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          user_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patients");
  },
};
