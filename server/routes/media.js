import express from "express";
import { addMedia, deleteMedia } from "../controllers/media.js";

const router = express.Router({ mergeParams: true });

router.route("/").post(addMedia);
router.route("/:id").delete(deleteMedia);

export default router;
