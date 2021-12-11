import express from "express";

import {
    uploadMedia,
    // replaceVariant,
    deleteMedia,
    getProducts,
    getProduct,
} from "../controllers/products.js";
import Product from "../models/Product.js";

// Middleware
import advancedResults from "./../middleware/advancedResults.js";

const router = express.Router();

router.route("/").get(advancedResults(Product), getProducts);
router.route("/:id").get(getProduct);
router.route("/sku/:sku").get(getProduct);
router.route("/:id/media").post(uploadMedia);
router.route("/:id/media/:mediaId").delete(deleteMedia);
// router.route("/:id/variant").post(replaceVariant);

export default router;
