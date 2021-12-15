import express from "express";
import { addMedia } from "../controllers/media.js";

const router = express.Router({ mergeParams: true });

router.route("/").post(addMedia);
router.route("/:id").delete();

export default router;
