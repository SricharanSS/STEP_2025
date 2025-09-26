const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { validateToken } = require("../middlewares/auth.middleware");
const { sendResponse } = require("../utils/response.utils");

router.post("/login", (req, res) => {
	authController.loginUser(req, res);
});

router.get("/verifyToken", validateToken, (req, res) => {
	sendResponse(res, null, "Valid Token", 200);
})

module.exports = router;