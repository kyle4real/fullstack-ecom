import express from "express";
import { addVariant, deleteVariant, updateVariant } from "../controllers/variants.js";

const router = express.Router({ mergeParams: true });

router.route("/").post(addVariant);
router.route("/:id").put(updateVariant).delete(deleteVariant);

export default router;
