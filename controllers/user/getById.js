const { Users, Role } = require("../../models/index");

const models = require("../../models/index");

module.exports = async (req, res) => {
  const user = await Users.findByPk();

  if (!user) {
    return res.status(404).json({
      status: "Error",
      message: "There is nothing here",
    });
  } else {
    return user;
  }
};
