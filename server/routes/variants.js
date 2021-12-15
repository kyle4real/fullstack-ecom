import express from "express";
import { addVariant } from "../controllers/variants.js";

const router = express.Router({ mergeParams: true });

router.route("/").post(addVariant);
router.route("/:id").delete();

export default router;
