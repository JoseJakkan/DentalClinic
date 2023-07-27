const express = require("express");
const userController = require("../controllers/users");
const verifyToken = require("../middelwares/verifyToken");
const router = express.Router();

//find the user profile
router.get("/profile", verifyToken, userController.findSelf);
//Create appointment
router.post("/createAppoint", verifyToken, userController.createAppoint);
//Cancel Appointment
router.delete("/cancelAppoint", verifyToken, userController.cancelAppoint);
//Find Appointment of User
router.get("/findAppointment", verifyToken, userController.findAppointment);
//Updtate profile
router.put("/modifyProfile", verifyToken, userController.modifyProfile);
//Updtate Appointment
router.put(
  "/modifyAppointment/:id",
  verifyToken,
  userController.modifyAppointment
);

module.exports = router;
