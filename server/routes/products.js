import express from "express";

import {
    products,
    product,
    uploadMedia,
    replaceVariant,
    deleteMedia,
} from "../controllers/products.js";
import auth from "./../middleware/auth.js";

const router = express.Router();

router.route("/").get(products);
router.route("/:id").get(product);
router.route("/media").post(uploadMedia);
router.route("/media/delete").post(deleteMedia);
router.route("/:id/variant").post(replaceVariant);

export default router;
