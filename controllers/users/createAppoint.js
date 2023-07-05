const { Appointment, Patient } = require("../../models");

module.exports = async (req, res) => {
  //Parameters required
  const { userId } = req;

  try {
    //user_id Validation
    const patient = await Patient.findOne({ where: { user_id: userId } });

    //New appointment creation
    const createAppointment = { ...req.body, patient_id: patient.id };

    await Appointment.create(createAppointment);

    res.status(200).json({
      message: "Appointment created sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Error creating appointment",
    });
  }
};
