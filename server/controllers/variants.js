import Product from "../models/Product.js";
import Variant from "../models/Variant.js";
import Media from "../models/Media.js";
import asyncHandler from "../middleware/async.js";
import cloudinary from "../config/cloudinary.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    Add variant to product
// @route   POST /admin/products/:productId/variants
// @access  Private
export const addVariant = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.productId);
    if (!product) {
        return next(new ErrorResponse(`Resource not found with id ${req.params.productId}`));
    }
    req.body.sku = req.body.title
        .split(" ")
        .map((str) => str[0].toLowerCase() + str.substr(1))
        .join("-");
    req.body.product = req.params.productId;
    let variant = new Variant(req.body);
    variant = await variant.save();

    res.status(200).json({ success: true, data: variant });
});

// @desc    Update variant
// @route   PUT /admin/products/:productId/variants/:id
// @access  Private
export const updateVariant = asyncHandler(async (req, res, next) => {
    var variant = await Variant.findById(req.params.id);
    if (!variant) {
        return next(new ErrorResponse(`Resouce not found with id ${req.params.id}`));
    }

    const keys = Object.keys(req.body);
    for (let i = 0; i < keys.length; i++) variant[keys[i]] = req.body[keys[i]];
    variant = await variant.save();
    if (req.body.hasOwnProperty("media")) {
        variant = await Variant.findById(req.params.id).populate("media");
    }

    res.status(200).json({ success: true, data: variant });
});

// @desc    Delete variant from product
// @route   DELETE /admin/products/:productId/variants/:id
// @access  Private
export const deleteVariant = asyncHandler(async (req, res, next) => {
    const variant = await Variant.findById(req.params.id);
    if (!variant) {
        return next(new ErrorResponse(`Resouce not found with id ${req.params.id}`));
    }
    await variant.remove();
    res.status(200).json({ success: true, data: {} });
});
