import express from "express";

import { createCheckoutSession } from "../controllers/stripe.js";

const router = express.Router();

router.route("/create-checkout-session").post(createCheckoutSession);

export default router;
