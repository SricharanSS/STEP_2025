import express from "express";
const authRouter = express.Router();
import {loginUser, registerUser} from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/auth.middleware.js";
import { sendResponse } from "../utils/response.utils.js";

authRouter.post("/register", (req, res) => {
	registerUser(req, res);
});

authRouter.post("/login", (req, res) => {
	loginUser(req, res);
});

authRouter.get("/verifyToken", validateToken, (req, res) => {
	sendResponse(res, null, "Valid Token", 200);
})

export default authRouter;