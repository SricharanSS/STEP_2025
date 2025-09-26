import express from "express";
import auth from "./auth.route.js";
const router = express.Router();

router.use("/auth", auth);

export default router;