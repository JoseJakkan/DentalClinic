const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
// const adminRouter = require("./routes/admin");
// const staffRouter = require("./routes/staff");


router.use("/", indexRouter);
// router.use("/users", usersRouter);
router.use("/auth", authRouter);
// router.use("/admin", adminRouter);
// router.use("/staff", staffRouter);

module.exports = router;

