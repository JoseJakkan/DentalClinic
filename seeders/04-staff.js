const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "staff",
      [
        {
          user_id: 1,
          job_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          job_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          job_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          job_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          job_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          job_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          job_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          job_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          job_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          job_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("staff", {});
  },
};
