const { User } = require("../../models");

module.exports = async (req, res) => {

  //Pagination
  let { page } = req.query;

  page = +page;
  if (!page || page < 0) page = 1;

  const LIMIT = 4;
  const userCount = await User.count();
  const maxPages = Math.ceil(userCount / LIMIT);

  if (page > maxPages) {
    return res.status(404).json({
      status: "Error",
      message: "There is nothing here",
    });
  }

//Find Patients Endpoint

  try {
    const patients = await User.findAll({
      where: { role_id: 2 },
      attributes: {
        exclude: ["id", "password", "createdAt", "updatedAt", "role_id"],
      },
    });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retreiving all users",
    });
  }
};
