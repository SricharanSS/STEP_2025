const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const { validateToken } = require("../middlewares/auth.middleware");
const { sendResponse } = require("../utils/response.utils");

userRouter.get("/", validateToken, (req, res) => {
    userController.getAllUsersController(req,res);
})

module.exports = userRouter;