const { Patient, Appointment, Doctor, User } = require("../../models");

module.exports = async (req, res) => {
  //id Validation
  const { id } = req.params;
  try {
    //required parameters
    const modify = { ...req.body };
    //modify appointment endpoint
    await Appointment.update(modify, { where: { id: id } });
    const appointments = await Appointment.modifyAppoint({
      where: { patient_id: patient.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Patient,
          as: "patient",
          attributes: ["id"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["user_name", "user_lastname"],
            },
          ],
        },
        {
          model: Doctor,
          as: "doctor",
          attributes: ["id"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["user_name", "user_lastname"],
            },
          ],
        },
      ],
    });

    const filterAppo = appointments.map((a) => {
      return {
        patient: {
          name: a.patient.user.user_name,
          lastname: a.patient.user.user_lastname,
        },
        doctor: {
          name: a.doctor.user.user_name,
          lastname: a.doctor.user.user_lastname,
        },
        date: a.date,
        time: a.time,
      };
    });

    res.status(200).json(filterAppo);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error retrieving appointment",
    });
  }
};
