const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const modify = { ...req.body };
    console.log(modify);
    console.log(modify.appointment_id);
    await Appointment.update(
      {
        appointment_id: modify.appointment_id,
        date: modify.date,
        time: modify.time,
      },
      { where: { id: modify.appointment_id } }
    );

    res.status(200).json({
      message: "bien",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error updating appointment",
    });
  }
};
