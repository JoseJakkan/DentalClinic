const jwt = require("jsonwebtoken");

//Generate token
const generateToken = (payload) =>
   jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
   });
   
// extract token from the header of petition (request)

const getTokenFromHeader = (headers) => {
   const { authorization } = headers;

   if (!authorization) return null;
   else return authorization.split(" ")[1];
};

// decodify token
const decodedToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
   generateToken,
   getTokenFromHeader,
   decodedToken,
};