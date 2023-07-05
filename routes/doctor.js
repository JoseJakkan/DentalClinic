const express = require("express");
const doctorController = require("../controllers/doctors");
const verifyToken = require("../middelwares/verifyToken");
const isDoctor = require("../middelwares/isDoctor");
const router = express.Router();

//Find all patients
router.get("/findPatient", verifyToken, isDoctor, doctorController.findPatient);

//find appointments of doctors
router.get(
  "/doctorAppoinment",
  verifyToken,
  isDoctor,
  doctorController.doctorAppoinment
);

module.exports = router;
