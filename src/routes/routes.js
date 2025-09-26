const express = require("express");
const auth = require("./auth.route");
const getAllUsers = require("./user.route");
const router = express.Router();

router.use("/auth", auth);
router.use("/users", getAllUsers);

module.exports = router;