const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
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
    await queryInterface.bulkDelete("roles", {
      [Op.or]: [{ role: "admin" }, { role: "user" }],
    });
  },
};
