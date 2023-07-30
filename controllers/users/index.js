const userController = {};

userController.findSelf = require("./findSelf");
userController.createAppoint = require("./createAppoint");
userController.cancelAppoint = require("./cancelAppoint");
userController.findAppointment = require("./findAppointment");
userController.modifyProfile = require("./modifyProfile");
userController.modifyAppointment = require("./modifyAppointment");
userController.findOneAppointment = require("./findOneAppointment");

module.exports = userController;
