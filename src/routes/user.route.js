import express from "express";
const userRouter = express.Router();
import {getAllUsersController} from "../controllers/user.controller.js";
import { validateToken } from "../middlewares/auth.middleware.js";
import { sendResponse } from "../utils/response.utils.js";

userRouter.get("/", validateToken, (req, res) => {
    getAllUsersController(req,res);
})

export default userRouter;