const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "role",
      [
        {
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("role", {
      [Op.or]: [{ role: "admin" }, { role: "user" }],
    });
  },
};
