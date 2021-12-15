import express from "express";

import { getProduct, getProducts, updateProduct } from "../controllers/products.admin.js";
import Product from "../models/Product.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect } from "../middleware/auth.js";

// Include other resource routers
import mediaRoutes from "./media.js";

const router = express.Router();

router.use(protect);

// Re-route into other resource routers
router.use("/:productId/media", mediaRoutes);

router
    .route(`/`)
    .get(
        advancedResults(Product, [{ path: "variants" }, { path: "media" }, { path: "image" }]),
        getProducts
    );
router.route(`/:id`).get(getProduct).put(updateProduct);

export default router;
