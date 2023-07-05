const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  //id Validation
  const { id } = req.params;
  try {
    //required parameters
    const modify = { ...req.body };
    //modify appointment endpoint
    await Appointment.update(modify, { where: { id: id } });
    res.status(200).json({
      message: "Appointment updated sucessfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error updating appointment",
    });
  }
};
