import Product from "../models/Product.js";
import Variant from "../models/Variant.js";
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
    var product = new Product(req.body);
    product = await product.save();
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
        res.status(200).json({ success: true, data: product });
    } else res.status(200).json({ success: true, data: product });
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
