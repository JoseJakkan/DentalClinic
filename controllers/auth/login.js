const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const { Role, User } = require("../../models");

const test = require("../../models");

console.log(test.sequelize.models);

/**
 * Login user
 * Url example: [POST] http://localhost:3000/auth/login
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "Error",
      message: "Passeord Required",
    });
  }

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      include: [{ model: Role, as: "role" }],
    });

    if (!user) {
      return res.status(400).json({
        status: "Error",
        message: "Bad Credential",
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "Error",
        message: "Bad Credential",
      });
    }

    const token = generateToken({
      userId: user.id,
      userName: user.user_name,
      userRole: user.role.role,
    });

    // const student = await Student.findOne({
    //    where: {
    //       id_user: user.id,
    //    },
    // });

    // const courses = await student.getCourses();
    // console.log(courses.length);

    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Login Fail",
    });
  }
};
