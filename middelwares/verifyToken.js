const { getTokenFromHeader, decodedToken } = require("../utils/token");

module.exports = (req, res, next) => {
  // Verificar si hay token
  const token = getTokenFromHeader(req.headers);

  if (!token) {
    return res.status(401).json({
      status: "Error",
      message: "No authorization token was found",
    });
  }

  try {
    //Modificar el objeto request para pasarlo a la siguiente funcion
    const decoded = decodedToken(token);

    req.userId = decoded.userId;
    req.userName = decoded.userName;
    req.userRole = decoded.userRole;

    next(); // <----- con esto mandamos el objeto request a la siguiente funcion
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Invalid token",
    });
  }
};
