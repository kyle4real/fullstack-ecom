import express from "express";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/refresh_token").post(refreshToken);
router.route("/logout").get(logout);
router.route("/me").get(protect, getMe).put(protect, updateMe);
router.route("/updatepassword").put(protect, updatePassword);

export default router;
