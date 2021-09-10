import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    salePrice: { type: String, required: true },
    createdAt: { type: String, default: String(new Date().toISOString()) },
    tags: [{ type: String }],
    description: { type: String },
    media: [{ url: { type: String }, public_id: { type: String } }],
    variants: [
        {
            title: { type: String },
            price: { type: String },
            salePrice: { type: String },
            mediaUrl: { type: String, default: null },
        },
    ],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
