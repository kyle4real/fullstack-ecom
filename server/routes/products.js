import express from "express";

import { products } from "../controllers/products.js";
import auth from "./../middleware/auth.js";

const router = express.Router();

router.route("/").get(products);

export default router;
