 const { User } = require("../../models/index");

module.exports = async (req, res) => {
  const { userID } = req.param;

  try {
    if ((userID = User.id)) {
      res.status(200).json(user);
    } else {
      res.status(404).json("Not found");
    }
    console.log(user);
    console.log(token);
  } catch (error) {}
};