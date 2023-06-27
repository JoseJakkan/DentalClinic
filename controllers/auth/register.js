const bcrypt = require("bcrypt");
const { User } = require("../../models");

/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
  const {
    user_name,
    user_last_name,
    email,
    password,
    birthdate,
    address,
    phone,
  } = req.body;

  if (password.lenght < 8) {
    return res.status(400).json({
      status: "Error",
      message: "Password length can not be less than 8",
    });
  }

  try {
    const hash = bcrypt.hashSync(password, 10);

    const newUser = {
      user_name,
      user_last_name,
      email,
      password: hash,
      birthdate,
      address,
      phone,
      roles_id: 2, // roles = user
      position_id: 4, //position = patient
    };

    const user = await User.create(newUser);

    res.status(201).json({
      message: "User created succsessfully",
    });
  } catch (error) {
   

    const statusCode =
      error.name == "SequelizeUniqueConstraintError" ||
      error.name == "SequelizeValidationError"
        ? 400
        : 500;

    res.status(statusCode).json({
      status: "Error",
      message: "Error creating user",
    });
  }
};
