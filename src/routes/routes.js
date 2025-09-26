import express from "express";
import auth from "./auth.route.js";
import getAllUsers from "./user.route.js";
const router = express.Router();

router.use("/auth", auth);
router.use("/users", getAllUsers);

export default router;