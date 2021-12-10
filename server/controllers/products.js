import Product from "../models/product.js";

import cloudinary from "../config/cloudinary.js";

import { productsArr } from "../config/data.js";

export const products = async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json({ data: products });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const product = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findOne({ sku: id });

        if (!product) res.status(404).json({ message: "Product does not exist." });

        res.status(200).json({ data: product });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const replaceVariant = async (req, res) => {
    try {
        const id = req.params.id;
        const newVariant = req.body;

        const product = await Product.findById(id);
        let index = product.variants.findIndex((variant) => String(variant._id) === newVariant._id);
        product.variants[index] = { ...newVariant };
        await product.save();

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

        if (!uploadedResponse)
            return res.status(500).json({ message: "File could not be uploaded." });

        const uploadUrl = uploadedResponse.url;
        const uploadId = uploadedResponse.public_id;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                $push: {
                    media: {
                        url: uploadUrl,
                        public_id: uploadId,
                    },
                },
            },
            { new: true }
        );

        res.status(200).json({ data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const deleteMedia = async (req, res) => {
    try {
        const { data, id } = req.body;
        const { public_id, url } = data;

        const { result } = await cloudinary.uploader.destroy(public_id);

        if (result !== "ok") return res.status(500).json({ message: "File could not be deleted." });

        const product = await Product.findById(id);
        // remove from product
        product.media = product.media.filter((item) => item.public_id !== public_id);
        // remove from variants
        const indicies = product.variants.reduce((r, v, i) => {
            return r.concat(v.mediaUrl === url ? i : []);
        }, []);
        for (let i = 0; i < indicies.length; i++) {
            product.variants[indicies[i]].mediaUrl = null;
        }

        product.save();

        res.status(200).json({ data: product });
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
