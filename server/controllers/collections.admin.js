import Product from "../models/Product.js";
import Variant from "../models/Variant.js";
import Media from "../models/Media.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";
import Collection from "../models/Collection.js";

// @desc    Get collections
// @route   GET /admin/collections/
// @access  Private
export const getCollections = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc    Get collection
// @route   GET /admin/collections/:id
// @access  Private
export const getCollection = asyncHandler(async (req, res, next) => {
    const collection = await Collection.findById(req.params.id).populate({
        path: "products",
        populate: { path: "image" },
    });
    if (!collection) return next(new ErrorResponse(`Resouce not found with id ${req.params.id}`));
    res.status(200).json({ success: true, data: collection });
});
