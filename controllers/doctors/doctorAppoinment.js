const { Appointment, Doctor } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const doctor = await Doctor.findOne({ where: { user_id: userId } });

    const appointment = await Appointment.findAll({
      where: { doctor_id: doctor.id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "role_id"],
      },
    });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error retreiving all appointments",
    });
  }
};
