const { User } = require("../../models");

module.exports = async (req, res) => {
  //user_id verification
  const { id } = req.params;

  //get by id endpoint
  try {
    const users = await User.findByPk(id, {
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retreiving user",
    });
  }
};
