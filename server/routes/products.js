import express from "express";

import { getProducts, getProduct } from "../controllers/products.js";
import Product from "../models/Product.js";

// Middleware
import advancedResults from "./../middleware/advancedResults.js";

const router = express.Router();

router.route("/").get(
    advancedResults(Product, {
        path: "variants",
        // perDocumentLimit: 4,
        select: "media",
        populate: { path: "media", select: "url" },
    }),
    getProducts
);
router.route("/:sku").get(getProduct);

export default router;
