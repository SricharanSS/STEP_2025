const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller");
const { validateToken } = require("../middlewares/auth.middleware");
const { sendResponse } = require("../utils/response.utils");

authRouter.post("/register", (req, res) => {
	authController.registerUser(req, res);
});

authRouter.post("/login", (req, res) => {
	authController.loginUser(req, res);
});

authRouter.get("/verifyToken", validateToken, (req, res) => {
	sendResponse(res, null, "Valid Token", 200);
})

module.exports = authRouter;