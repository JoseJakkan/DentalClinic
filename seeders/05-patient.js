const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "patient",
      [
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
        {
          user_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 22,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patient", {});
  },
};
