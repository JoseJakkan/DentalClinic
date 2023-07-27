const { Patient, Appointment } = require("../../models");

module.exports = async (req, res) => {
  //Parameters required
  const { userId } = req;

  try {
    //user_id Validation
    const patient = await Patient.findOne({ where: { user_id: userId } });

    const newAppointment = { ...req.body, patient_id: patient.id };

    await Appointment.create(newAppointment);

    res.status(200).json(newAppointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error creating appointment",
    });
  }
};
