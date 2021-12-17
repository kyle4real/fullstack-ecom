import Product from "../models/Product.js";
import Variant from "../models/Variant.js";
import Media from "../models/Media.js";
import asyncHandler from "../middleware/async.js";
import cloudinary from "../config/cloudinary.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    Add media to product
// @route   POST /admin/products/:productId/media
// @access  Private
export const addMedia = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.productId).populate({
        path: "media",
        options: { sort: { position: -1 } },
    });
    if (!product) {
        return next(new ErrorResponse(`Resource not found with id ${req.params.productId}`));
    }

    // create new media so we can use its id for cloudinary
    let media = new Media();
    const { base64Img } = req.body;
    const cloudinaryRes = await cloudinary.uploader.upload(base64Img, {
        upload_preset: "ecom",
        public_id: `${product.sku}/uploaded-${media._id}`,
    });
    const { public_id, url } = cloudinaryRes;

    media.public_id = public_id;
    media.url = url;
    media.position = product.media.length ? product.media[0].position + 1 : 1;
    media.product = req.params.productId;
    media = await media.save();

    res.status(200).json({ data: media });
});

// @desc    Delete media from product
// @route   DELETE /admin/products/:productId/media/:id
// @access  Private
export const deleteMedia = asyncHandler(async (req, res, next) => {
    const media = await Media.findById(req.params.id);
    if (!media) {
        return next(new ErrorResponse(`Resouce not found with id ${req.params.id}`));
    }
    await media.remove();
    res.status(200).json({ success: true, data: {} });
});
