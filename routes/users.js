const express = require("express");
const userController = require("../controllers/users");
const verifyToken = require("../middelwares/verifyToken");
const router = express.Router();

router.get("/:user_name", verifyToken, userController.findSelf);

module.exports = router;
