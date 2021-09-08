import Product from "../models/product.js";

import { productsArr } from "../config/data.js";

export const products = async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json({ result: products });
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
