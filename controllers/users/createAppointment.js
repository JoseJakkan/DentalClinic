const { User, Appointment } = require("../../models/index");

/**
 * Create new appointment
 * Url example: [POST] http://localhost:3000/auth/appointment
 * @param {*} req Request object
 * @param {*} res Response object
 */

module.exports = async (req, res) => {
  const { Date, Doctor } = req.body;

  const newAppointment = {
    Date,
    Doctor,
  };

  try {
    const appointment = await Appointment.create(newAppointment);

    res.status(201).json({
      message: "User created succsessfully",
    });
  } catch (error) {
    res.status(statusCode).json({
      status: "Error",
      message: "Error creating user",
    });
  }
};
