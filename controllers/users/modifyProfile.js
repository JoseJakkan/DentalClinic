const { User } = require("../../models");

module.exports = async (req, res) => {
  //id validation
  const { userId } = req;
  try {
    //required parametrs
    const modify = { ...req.body };
    //Modify profile endpoint
    await User.update(modify, { where: { id: userId } });
    res.status(200).json({
      message: "User updated succsessfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error updating user",
    });
  }
};
