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

  //Find All Endpoint

  try {
    const users = await User.findAll({
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });
    res.status(200).json({
      info: {
        count: userCount,
        page,
        pages: maxPages,
      },
      results: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retreiving all users",
    });
  }
};
