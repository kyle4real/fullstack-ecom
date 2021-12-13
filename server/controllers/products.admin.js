import Product from "../models/Product.js";
import asyncHandler from "../middleware/async.js";
import cloudinary from "../config/cloudinary.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    Get products
// @route   GET /admin/products/
// @access  Private
export const getProducts = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc    Get product
// @route   GET /admin/products/:id
// @access  Private
export const getProduct = asyncHandler(async (req, res, next) => {
    var product = await Product.findById(req.params.id).populate("variants").populate("media");
    if (!product) return next(new ErrorResponse(`Resource not found with id ${req.params.id}`));
    res.status(200).json({ success: true, data: product });
});
