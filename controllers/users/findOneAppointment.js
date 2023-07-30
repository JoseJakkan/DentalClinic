const { Appointment, User, Patient, Doctor } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;
  const { appoId } = req.body;

  try {
    const patient = await Patient.findOne({
      attributes: ["id"],
      where: {
        user_id: userId,
      },
    });
    console.log(modify.appoId);
    console.log(patient.id);

    const appointment = await Appointment.findAll({
      attributes: ["date", "id"],
      include: [
        {
          model: Doctor,
          as: "doctor",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password", "id"],
          },
          include: [
            {
              model: User,
              as: "user",
              attributes: {
                exclude: [
                  "createdAt",
                  "updatedAt",
                  "passwprd",
                  "role_id",
                  "id",
                  "birthdate",
                  "email",
                  "phone",
                  "address",
                ],
              },
            },
          ],
        },
        {
          model: Patient,
          as: "patient",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password", "id"],
          },
          include: [
            {
              model: User,
              as: "user",
              attributes: {
                exclude: [
                  "createdAt",
                  "updatedAt",
                  "passwprd",
                  "role_id",
                  "id",
                  "birthdate",
                  "email",
                  "phone",
                  "address",
                ],
              },
            },
          ],
        },
      ],
      where: {
        patient_id: patient.id,
        id: appoId,
      },
    });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
      //   message: "Error retreiving appointment",
    });
  }
};
