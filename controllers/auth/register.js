const bcrypt = require("bcrypt");
const { Patient, User } = require("../../models");

module.exports = async (req, res) => {
  //Required Parameters
  const { user_name, user_lastname, email, password } = req.body;

  //Pasword Validation

  if (password.lenght < 8) {
    return res.status(400).json({
      status: "Error",
      message: "Password length can't be less than 8",
    });
  }

  try {
    //New user register
    const hash = bcrypt.hashSync(password, 10);

    const newUser = {
      user_name,
      user_lastname,
      email,
      password: hash,
      role_id: 2,
    };

    const user = await User.create(newUser);

    const newPatient = {
      user_id: user.id,
    };

    const patient = await Patient.create(newPatient);

    res.status(201).json({
      message: "User created succsessfully",
    });
  } catch (error) {
    console.log(error);

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
