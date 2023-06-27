module.exports = (req, res, next) => {
  const { userRole } = req;
  if (userRole != "admin") {
    res.status(403).json({
      status: "Error",
      message: "Don't have permission",
    });
  } else {
    next();
  }
};
