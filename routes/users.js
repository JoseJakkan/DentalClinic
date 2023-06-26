const express = require("express");
const userController = require("../controllers/user");
/* const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin"); */
const router = express.Router();

/* GET users listing. */
router.get("/getAll", userController.getAll);
router.get("/:id", userController.getById);
module.exports = router;
