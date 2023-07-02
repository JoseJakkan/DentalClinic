const express = require("express");
const userController = require("../controllers/users");
const verifyToken = require("../middelwares/verifyToken");
const router = express.Router();

//find the user profile
router.get("/:user_name", verifyToken, userController.findSelf);
//Create appointment
router.post("./createAppoint", verifyToken, userController.findSelf);
//Cancel Appointment
router.deelte("./cancelAppointment", verifyToken, userController.findSelf);

module.exports = router;
