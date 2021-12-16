import express from "express";
import { addVariant, deleteVariant } from "../controllers/variants.js";

const router = express.Router({ mergeParams: true });

router.route("/").post(addVariant);
router.route("/:id").delete(deleteVariant);

export default router;
