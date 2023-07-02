const { User, Appointment } = require("../../models/index");

module.exports = async (req, res) => {
const { Appointment.date } = req.param;
const appointment = await Appointment.findAll({
if (Appointment.date == appointment.date) {
    
    await Post.destroy({
        where: {
            Appointment.date == appointment.date
        }
      });
}res.status(200).json("Appointment canceled")
})


}