const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const { User, Roles } = require("../../models");

const test = require("../../models");

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
      include: [{ model: Roles, as: "roles" }],
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
      userRole: user.roles.roles,
    });
    console.log(token);
    res.status(200).json({
      token,
    });
  } catch (error) {
    // console.log(error);
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
