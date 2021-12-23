import Product from "../models/Product.js";
import Variant from "../models/Variant.js";
import Media from "../models/Media.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";
import Collection from "../models/Collection.js";

// @desc    Get collection titles (and slug and description)
// @route   GET /collections/titles
// @access  Private
export const getCollectionTitles = asyncHandler(async (req, res, next) => {
    const collections = await Collection.find({}).select("title slug description");
    res.status(200).json({ success: true, data: collections });
});

// @desc    Get products for collection
// @route   GET /admin/collections/:id/products
// @access  Private
export const getProductsForCollection = asyncHandler(async (req, res, next) => {
    const collection = await Collection.findById(req.params.id).populate({
        path: "products",
        populate: [{ path: "variants", select: "price compare_at_price sku" }, { path: "image" }],
    });
    if (!collection) return next(new ErrorResponse(`Resource not found with id ${req.params.id}`));
    res.status(200).json({ success: true, data: collection.products });
});
