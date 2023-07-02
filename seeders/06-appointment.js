const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Appointment",
      [
        {
          user_id: 6,
          date: "2023-07-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          date: "2023-07-08",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          date: "2023-07-06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          date: "2023-07-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          date: "2023-07-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 11,
          date: "2023-07-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Appointment", {});
  },
};
