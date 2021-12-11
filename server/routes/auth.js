import express from "express";
import { getMe, login, logout, refreshToken, register, updateMe } from "../controllers/auth.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/refresh_token").post(refreshToken);
router.route("/logout").get(logout);
router.route("/me").get(protect, getMe).put(protect, updateMe);
// router.route("/updatepassword").put(protect, updatePassword);

export default router;
