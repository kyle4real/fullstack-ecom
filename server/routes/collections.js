import express from "express";

import { getCollectionTitles, getProductsForCollection } from "../controllers/collections.js";

const router = express.Router();

router.route("/titles").get(getCollectionTitles);
router.route("/:id/products").get(getProductsForCollection);

export default router;
