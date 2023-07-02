const { User, roles } = require("../../models");

const models = require("../../models/index");

module.exports = async (req, res) => {
  let { page } = req.query;

  page = +page;
  if (!page || page < 0) page = 1;

  const LIMIT = 3;
  const userCount = await User.count();
  const maxPages = Math.ceil(userCount / LIMIT);

  if (page > maxPages) {
    return res.status(404).json({
      status: "Error",
      message: "There is nothing here",
    });
  }

  try {
    const users = await User.findAll({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      attributes: [
        "id",
        ["user_name", "name"],
        ["user_last_name", "last_name"],
      ],
      include: [
        {
          model: roles,
          as: "roles",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
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
      message: "Error find all users",
    });
  }
};
