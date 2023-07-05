const { User } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const users = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ["id", "password", "createdAt", "updatedAt", "role_id"],
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error retreiving user",
    });
  }
};
