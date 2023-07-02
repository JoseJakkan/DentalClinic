const { User, Appointment } = require("../../models");

const models = require("../../models/index");

module.exports = async (req, res) => {
  try {
    const appointment = await Appointment.findAll();
    res.status(200).json(appointment);
    console.log(appointment);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error find all users",
    });
  }
};
