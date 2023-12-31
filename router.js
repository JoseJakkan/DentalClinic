const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const doctorRouter = require("./routes/doctor");

router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/doctor", doctorRouter);

module.exports = router;
