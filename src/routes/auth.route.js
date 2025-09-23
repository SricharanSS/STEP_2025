const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/login", (req, res) => {
	authController.loginUser(req, res);
});

module.exports = router;