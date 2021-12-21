import Product from "../models/Product.js";
import Variant from "../models/Variant.js";
import Collection from "../models/Collection.js";
import asyncHandler from "../middleware/async.js";
import cloudinary from "../config/cloudinary.js";
import ErrorResponse from "../utils/errorResponse.js";
import mongoose from "mongoose";

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
    var product = await Product.findById(req.params.id).populate([
        { path: "variants" },
        { path: "media", options: { sort: { position: 1 } } },
        { path: "collections" },
    ]);
    if (!product) return next(new ErrorResponse(`Resource not found with id ${req.params.id}`));
    res.status(200).json({ success: true, data: product });
});

// @desc    Create product
// @route   POST /admin/products/
// @access  Private
export const createProduct = asyncHandler(async (req, res, next) => {
    req.body.sku = req.body.title
        .split(" ")
        .map((p) => p.toLowerCase())
        .join("-");
    var product = await Product.create(req.body);
    var variantBody = {
        title: "Default Title",
        price: req.body.price,
        compare_at_price: req.body.compare_at_price,
        product: product._id,
    };
    var variant = new Variant(variantBody);
    variant = await variant.save();

    product.variants = [variant];
    res.status(200).json({ success: true, data: product });
});

// @desc    Update product
// @route   PUT /admin/products/:id
// @access  Private
export const updateProduct = asyncHandler(async (req, res, next) => {
    var product = await Product.findById(req.params.id);
    if (!product) return next(new ErrorResponse(`Resource not found with id ${req.params.id}`));
    const keys = Object.keys(req.body);
    for (let i = 0; i < keys.length; i++) product[keys[i]] = req.body[keys[i]];
    product = await product.save();
    if (req.body.hasOwnProperty("variants")) {
        const updatedVariants = await updateProductVariants(req, res, next);
        product.variants = updatedVariants;
    }
    if (req.body.hasOwnProperty("collections")) {
        const updatedCollections = await updateProductInCollections(req, res, next);
        product = await Product.findById(req.params.id).populate("collections");
    }
    res.status(200).json({ success: true, data: product });
});

const updateProductInCollections = asyncHandler(async (req, res, next) => {
    const collectionsArr = req.body.collections;
    console.log(collectionsArr);

    const updateCollection = async (v) => {
        return new Promise((resolve, reject) => {
            const update = v.include
                ? { $push: { products: req.params.id } }
                : { $pull: { products: req.params.id } };
            Collection.findByIdAndUpdate(
                v._id,
                update,
                { runValidators: true, new: true },
                (err, result) => {
                    console.log(result);
                    if (err) return reject(err);
                    else return resolve(result);
                }
            );
        });
    };

    const collections = [];
    await collectionsArr.reduce(
        (r, v) =>
            r
                .then(() => {
                    return updateCollection(v);
                })
                .then((res) => {
                    if (v.include) collections.push(res);
                    return;
                })
                .catch((err) => {
                    return next(new ErrorResponse(`${err}`, 400));
                }),
        Promise.resolve()
    );

    return collections;
});

const updateProductVariants = asyncHandler(async (req, res, next) => {
    const variantsArr = req.body.variants;

    const updateVariant = async (v) => {
        return new Promise((resolve, reject) => {
            Variant.findByIdAndUpdate(
                v._id,
                v,
                { runValidators: true, new: true },
                (err, result) => {
                    if (err) return reject(err);
                    else return resolve(result);
                }
            );
        });
    };

    const updatedVariants = [];
    await variantsArr.reduce(
        (r, v) =>
            r
                .then(() => {
                    return updateVariant(v);
                })
                .then((res) => {
                    return updatedVariants.push(res);
                })
                .catch((err) => {
                    return next(new ErrorResponse(`${err}`, 400));
                }),
        Promise.resolve()
    );

    return updatedVariants;
});
