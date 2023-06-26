const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "appointment",
      [
        {
          staff_id: 1,
          patient_id: 5,
          date: "2023-07-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          staff_id: 2,
          patient_id: 10,
          date: "2023-07-08",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          staff_id: 3,
          patient_id: 4,
          date: "2023-07-06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          staff_id: 4,
          patient_id: 6,
          date: "2023-07-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          staff_id: 3,
          patient_id: 1,
          date: "2023-07-23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          staff_id: 2,
          patient_id: 12,
          date: "2023-07-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("appointment", {});
  },
};
