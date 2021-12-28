import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    Create Stripe Checkout Session
// @route   POST /stripe/create-checkout-session
// @access  Public
export const createCheckoutSession = asyncHandler(async (req, res, next) => {});
