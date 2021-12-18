import Product from "../models/Product.js";
import Variant from "../models/Variant.js";
import Media from "../models/Media.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";
import Collection from "../models/Collection.js";

export const getCollectionTitles = asyncHandler(async (req, res, next) => {
    const collections = await Collection.find({}).select("title");
    res.status(200).json({ success: true, data: collections });
});
