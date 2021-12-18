import express from "express";

import { getCollectionTitles } from "../controllers/collections.js";

const router = express.Router();

router.route("/titles").get(getCollectionTitles);

export default router;
