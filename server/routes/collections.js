import express from "express";

import { getCollection, getCollections } from "../controllers/collections.js";
import Collection from "../models/Collection.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.route("/").get(advancedResults(Collection), getCollections);
router.route("/:id").get(getCollection);

export default router;
