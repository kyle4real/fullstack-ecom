import Product from "../models/Product.js";
import asyncHandler from "./../middleware/async.js";
import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";

import ErrorResponse from "../utils/errorResponse.js";

export const getProducts = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

export const getProduct = asyncHandler(async (req, res, next) => {
    if (req.params.id) {
        var product = await Product.findById(req.params.id);
    } else {
        console.log(req.params.sku);
        var product = await Product.findOne({ sku: req.params.sku });
    }
    if (!product) {
        return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 400));
    }

    res.status(200).json({ success: true, data: product });
});

// export const replaceVariant = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const newVariant = req.body;

//         const product = await Product.findById(id);
//         let index = product.variants.findIndex((variant) => String(variant._id) === newVariant._id);
//         product.variants[index] = { ...newVariant };
//         await product.save();

//         res.status(200).json({ result: product });
//     } catch (error) {
//         res.status(500).json({ message: "Something went wrong." });
//     }
// };

export const uploadMedia = asyncHandler(async (req, res, next) => {
    const { base64Img } = req.body;
    const uploadedResponse = await cloudinary.uploader.upload(base64Img, {
        upload_preset: "ecom",
    });

    if (!!uploadedResponse.error) {
        return next(new ErrorResponse(`File could not be uploaded.`, 400));
    }

    const { url, public_id } = uploadedResponse;

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        { $push: { media: { url, public_id } } },
        { new: true }
    );

    res.status(200).json({ data: product });
});

export const deleteMedia = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    let media = product.media.find((item) => item._id === req.params.mediaId);
    if (!media) {
        return next(new ErrorResponse(`Media could not be found`, 400));
    }

    const { public_id } = product.media;
    const { result } = await cloudinary.uploader.destroy(public_id);
    if (result !== "ok") {
        return next(new ErrorResponse(`Media could not be deleted`, 400));
    }

    product.media = product.media.filter((item) => item._id !== req.params.mediaId);

    // remove from variants
    const indicies = product.variants.reduce((r, v, i) => {
        return r.concat(v.mediaUrl === url ? i : []);
    }, []);
    for (let i = 0; i < indicies.length; i++) {
        product.variants[indicies[i]].mediaUrl = null;
    }

    product.save();

    res.status(200).json({ data: product });
});

// const createAll = async (req, res) => {
//     try {
//         const products = await Product.insertMany(productsArr);
//         console.log("created all");
//     } catch (error) {
//         console.log(error);
//     }
// };

// const deleteAll = async (req, res) => {
//     try {
//         await Product.deleteMany({});
//         console.log("deleted all");
//     } catch (error) {
//         console.log(error);
//     }
// };

// const recreate = async (req, res) => {
//     try {
//         await deleteAll();
//         await createAll();
//         return console.log("recreate done.");
//     } catch (error) {
//         console.log(error);
//     }
// };

// recreate();
