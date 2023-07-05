const { Patient, Appointment } = require("../../models");

module.exports = async (req, res) => {
  //user_id Validation
  const { userId } = req;

  try {
    const patient = await Patient.findOne({
      where: { user_id: userId },
    });
    //find appointment ednpoint
    const findAppointment = await Appointment.findAll({
      where: { patient_id: patient.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).json(findAppointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error retreiving appointment",
    });
  }
};
