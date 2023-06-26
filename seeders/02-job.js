const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "job",
      [
        {
          job: "doctor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          job: "nurse",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          job: "administrative",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("job", {
      [Op.or]: [{ job: "doctor" }, { job: "nurse" }, { job: "administrative" }],
    });
  },
};
