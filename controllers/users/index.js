const userController = {};

userController.findSelf = require("./findSelf");
userController.createAppoint = require("./createAppoint");
userController.cancelAppoint = require("./cancelAppoint");
module.exports = userController;
