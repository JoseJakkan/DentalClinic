const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "appointments",
      [
        {
          doctor_id: 1,
          patient_id: 8,
          date: "2023-07-05",
          time: "14:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctor_id: 2,
          patient_id: 6,
          date: "2023-07-08",
          time: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctor_id: 3,
          patient_id: 1,
          date: "2023-07-06",
          time: "12:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctor_id: 4,
          patient_id: 7,
          date: "2023-07-12",
          time: "18:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctor_id: 1,
          patient_id: 4,
          date: "2023-07-23",
          time: "09:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctor_id: 2,
          patient_id: 2,
          date: "2023-07-17",
          time: "11:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("appointments", {});
  },
};
