const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");
const { Role, User } = require("../../models");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  //Password Validation in form

  if (!email || !password) {
    return res.status(400).json({
      status: "Error",
      message: "Email and Password are required",
    });
  }

  //Login ·ndpoint

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      include: [{ model: Role, as: "role" }],
    });

    // Credential Validation

    if (!user) {
      return res.status(400).json({
        status: "Error",
        message: "Credentials do not match our records",
      });
    }

    // get student id, doctor id
    /* const userRole = user.Role.role;
    let patient;
    let doctor;
    if (userRole === "patient") {
      student = await user.get();
    } else if (userRole === "doctor") {
      doctor = await user.getDoctor();
    } */

    //Password validation by encriptation

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "Error",
        message: "Credentials do not match our records",
      });
    }

    //Token Generator
    console.log(user);
    const token = generateToken({
      userId: user.id,
      userName: user.user_name,
      userRole: user.role.role,
      roleId: user.id_role,
    /*   patientId: user.patient.user_id,
      appoId: appointment_id, */
    });

    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "User login failed",
    });
  }
};
