const express = require("express");
const staffController = require("../controllers/staff");
const verifyToken = require("../middelwares/verifyToken");
const router = express.Router();

//Find all patients
router.get("/findPatient", verifyToken, staffController.findPatient);

//find appointments of a doctor
router.get("/doctorAppoinment", verifyToken, staffController.doctorAppoinment);

module.exports = router;
