import express from "express";

import { products, product } from "../controllers/products.js";
import auth from "./../middleware/auth.js";

const router = express.Router();

router.route("/").get(products);
router.route("/:id").get(product);

export default router;
