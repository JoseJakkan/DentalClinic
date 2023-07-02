const { where } = require("sequelize");
const { User } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;

  page = +page;
  if (!page || page < 0) page = 1;

  const LIMIT = 3;
  const usersCount = await User.count();
  const maxPages = Math.ceil(usersCount / LIMIT);

  if (page > maxPages) {
    return res.status(404).json({
      status: "Error",
      message: "There is nothing here",
    });
  }

  try {
    const users = await User.findAll({
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      attributes: { exclude: ["createdAt", "updatedAt", "patient_id"] },
      // attributes: ["id", ["user_name", "name"], ["user_last_name", "last_name"],],
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "contrasena", "rol_id"],
          },
        },
      ],
    });

    if (User.Position == "Patient") {
      res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Error find all users",
    });
  }
};
