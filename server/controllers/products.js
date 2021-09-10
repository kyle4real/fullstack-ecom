import Product from "../models/product.js";

import cloudinary from "../config/cloudinary.js";

import { productsArr } from "../config/data.js";

export const products = async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json({ result: products });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const product = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findById(id);

        if (!product) res.status(404).json({ message: "Product does not exist." });

        res.status(200).json({ result: product });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const uploadMedia = async (req, res) => {
    try {
        const { base64Img, id } = req.body;
        const uploadedResponse = await cloudinary.uploader.upload(base64Img, {
            upload_preset: "ecom",
        });

        console.log(id);

        if (!uploadedResponse)
            return res.status(500).json({ message: "File could not be uploaded." });

        const uploadUrl = uploadedResponse.url;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                $push: {
                    imageUrls: uploadUrl,
                },
            },
            { new: true }
        );

        console.log(updatedProduct);

        res.status(200).json({ result: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

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
