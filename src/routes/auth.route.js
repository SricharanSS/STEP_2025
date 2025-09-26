import express from "express";
const router = express.Router();
import {loginUser} from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/auth.middleware.js";
import { sendResponse } from "../utils/response.utils.js";

router.post("/login", (req, res) => {
	loginUser(req, res);
});

router.get("/verifyToken", validateToken, (req, res) => {
	sendResponse(res, null, "Valid Token", 200);
})

export default router;