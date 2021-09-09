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
        res.status(200).json({ result: product });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const uploadMedia = async (req, res) => {
    try {
        const { data } = req.body;
        const uploadedResponse = await cloudinary.uploader.upload(data, {
            upload_preset: "ecom",
        });
        console.log(uploadedResponse);
        res.status(200).json({ message: "Good." });
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
