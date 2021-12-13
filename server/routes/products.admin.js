import express from "express";

import { getProduct } from "../controllers/products.admin.js";
import Product from "../models/Product.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.route(`/`);
router.route(`/:id`).get(getProduct);

export default router;
