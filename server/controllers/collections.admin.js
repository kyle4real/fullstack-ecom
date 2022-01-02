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

// @desc    Create collection
// @route   POST /admin/collections/
// @access  Private
export const createCollection = asyncHandler(async (req, res, next) => {
    req.body.slug = req.body.title
        .split(" ")
        .map((p) => p.toLowerCase())
        .join("-");
    let collection = await Collection.create(req.body);
    res.status(200).json({ success: true, data: collection });
});

// @desc    Update collection
// @route   PUT /admin/collections/:id
// @access  Private
export const updateCollection = asyncHandler(async (req, res, next) => {
    let collection = await Collection.findById(req.params.id);
    if (!collection) return next(new ErrorResponse(`Resouce not found with id ${req.params.id}`));
    const keys = Object.keys(req.body);
    for (let i = 0; i < keys.length; i++) collection[keys[i]] = req.body[keys[i]];
    collection = await collection.save();
    res.status(200).json({ success: true, data: collection });
});

// @desc    Delete collection
// @route   DELETE /admin/collections/:id
// @access  Private
export const deleteCollection = asyncHandler(async (req, res, next) => {
    const collection = await Collection.findById(req.params.id);
    if (!collection) return next(new ErrorResponse(`Resouce not found with id ${req.params.id}`));
    await collection.remove();
    res.status(200).json({ success: true, data: {} });
});
