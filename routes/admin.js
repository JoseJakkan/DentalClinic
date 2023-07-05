const express = require("express");
const adminController = require("../controllers/admin");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
const router = express.Router();

//Search all users
router.get("/getAll", verifyToken, isAdmin, adminController.getAll);

//Search one user
router.get("/:id", verifyToken, isAdmin, adminController.getById);
module.exports = router;
