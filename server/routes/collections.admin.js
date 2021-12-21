import express from "express";

import {
    createCollection,
    getCollection,
    getCollections,
    updateCollection,
} from "../controllers/collections.admin.js";
import Collection from "../models/Collection.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.route("/").get(advancedResults(Collection), getCollections).post(createCollection);
router.route("/:id").get(getCollection).put(updateCollection);

export default router;
