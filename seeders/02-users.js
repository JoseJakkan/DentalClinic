const bcrypt = require("bcrypt");

const password = "12345678";
const encryptedPassword = bcrypt.hashSync(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",

      [
        {
          user_name: "Admin",
          user_lastname: "admin",
          email: "admin@admin.com",
          password: encryptedPassword,
          birthdate: "1996-10-23",
          address: "Callum st, Sidney",
          phone: "486580503",
          role_id: 1,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Philip ",
          user_lastname: "Sherman",
          email: "doctor1@doctor.com",
          password: encryptedPassword,
          birthdate: "1996-10-23",
          address: "42 Wallaby Way, Sidney",
          phone: "488870503",
          role_id: 3,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Stephen",
          user_lastname: "Strange",
          email: "doctor2@doctor.com",
          password: encryptedPassword,
          birthdate: "2000-05-09",
          address: "87 George Street, Sidney",
          phone: "488670501",
          role_id: 3,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Laura",
          user_lastname: "Palmer",
          email: "doctor3@doctor.com",
          password: encryptedPassword,
          birthdate: "1972-06-22",
          address: "74 Woodbury St., Sidney",
          phone: "482870503",
          role_id: 3,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Robert",
          user_lastname: "Smith",
          email: "doctor4@doctor.com",
          password: encryptedPassword,
          birthdate: "1999-09-09",
          address: "89 Darley St, Sidney",
          phone: "488070503",
          role_id: 3,

          updatedAt: new Date(),
          createdAt: new Date(),
        },

        //patients
        {
          user_name: "Julio",
          user_lastname: "Cesar",
          email: "juliuscaesar@rome.com",
          password: encryptedPassword,
          birthdate: "1995-09-09",
          address: "23 Abergeldie St. , Sidney",
          phone: "788870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Cleopatra",
          user_lastname: "Philopathor",
          email: "queenoftwoegipts@aspid.com",
          password: encryptedPassword,
          birthdate: "1955-10-03",
          address: "56 Arlington St., Sidney",
          phone: "488876503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Alexander",
          user_lastname: "Tria Makedonia",
          email: "thegreat@alexandria.com",
          password: encryptedPassword,
          birthdate: "1998-11-28",
          address: "45 Seaview St., Sidney",
          phone: "418870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Acamapichtli",
          user_lastname: " huey tlatoani",
          email: "	Colhuateuctli@aztlan.com",
          password: encryptedPassword,
          birthdate: "1997-05-25",
          address: "21 Clissold St., Sidney",
          phone: "482870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Pericles",
          user_lastname: "tis Athínas",
          email: "patient5@o olympioníkis.com",
          password: encryptedPassword,
          birthdate: "1954-05-23",
          address: "33 Junction Rd, Sidney",
          phone: "488880503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Abd al-Rahmán",
          user_lastname: "ibn Muhámmad",
          email: " jalifa@Qurṭuba.com",
          password: encryptedPassword,
          birthdate: "1965-08-12",
          address: "35 Robert St., Sidney",
          phone: "388870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Toyotomi ",
          user_lastname: "Hideyoshi",
          email: "shogun@nihon.com",
          password: encryptedPassword,
          birthdate: "1975-05-16",
          address: "55 Palace St., Sidney",
          phone: "488770503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Boudica",
          user_lastname: " Icenia",
          email: "victus@britania.com",
          password: encryptedPassword,
          birthdate: "2000-02-02",
          address: "22 Lasswade St., Sidney",
          phone: "486870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {});
  },
};
