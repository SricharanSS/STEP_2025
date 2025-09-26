const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { validateToken } = require("../middlewares/auth.middleware");

router.post("/login", (req, res) => {
	authController.loginUser(req, res);
});

router.get("/verifyToken", validateToken, (req, res) => {
	res.send("Token is Valid");
})

module.exports = router;