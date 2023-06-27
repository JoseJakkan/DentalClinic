const { User } = require("../../models/index");

module.exports = async (req, res) => {
  const { userID } = req.param;
  const user = await User.findOne(userID);

  try {
    if ((user = user.user_id)) {
      res.status(200).json(user);
    }
    console.log(user);
  } catch (error) {}
};
