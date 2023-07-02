const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          roles: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roles: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", {
      [Op.or]: [{ role: "admin" }, { role: "user" }],
    });
  },
};
