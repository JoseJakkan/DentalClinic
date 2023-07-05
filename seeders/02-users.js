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
          user_name: "Patient 1",
          user_lastname: "Smith",
          email: "patient1@patient.com",
          password: encryptedPassword,
          birthdate: "1995-09-09",
          address: "23 Abergeldie St. , Sidney",
          phone: "788870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Patient 2",
          user_lastname: "Smith",
          email: "patient2@patient.com",
          password: encryptedPassword,
          birthdate: "1955-10-03",
          address: "56 Arlington St., Sidney",
          phone: "488876503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Patient 3",
          user_lastname: "Smith",
          email: "patient3@patient.com",
          password: encryptedPassword,
          birthdate: "1998-11-28",
          address: "45 Seaview St., Sidney",
          phone: "418870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Patient 4",
          user_lastname: "Smith",
          email: "patient4@patient.com",
          password: encryptedPassword,
          birthdate: "1997-05-25",
          address: "21 Clissold St., Sidney",
          phone: "482870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Patient 5",
          user_lastname: "Smith",
          email: "patient5@patient.com",
          password: encryptedPassword,
          birthdate: "1954-05-23",
          address: "33 Junction Rd, Sidney",
          phone: "488880503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Patient 6",
          user_lastname: "Smith",
          email: "patient6@patient.com",
          password: encryptedPassword,
          birthdate: "1965-08-12",
          address: "35 Robert St., Sidney",
          phone: "388870503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Patient 7",
          user_lastname: "Smith",
          email: "patient7@patient.com",
          password: encryptedPassword,
          birthdate: "1975-05-16",
          address: "55 Palace St., Sidney",
          phone: "488770503",
          role_id: 2,

          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Patient 8",
          user_lastname: "Smith",
          email: "patient8@patient.com",
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
