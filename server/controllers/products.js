import Product from "../models/Product.js";
import asyncHandler from "./../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    Get products
// @route   GET /products/
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

// @desc    Get product
// @route   GET /products/:sku
// @access  Public
export const getProduct = asyncHandler(async (req, res, next) => {
    var product = await Product.findOne({ sku: req.params.sku })
        .populate("variants")
        .populate([{ path: "media", options: { sort: { position: -1 } } }, { path: "image" }]);
    if (!product) {
        return next(new ErrorResponse(`Resource not found with sku ${req.params.sku}`, 400));
    }
    res.status(200).json({ success: true, data: product });
});
