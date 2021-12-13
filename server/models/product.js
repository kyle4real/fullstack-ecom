import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    sku: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    compareAtPrice: { type: Number, default: null },
    createdAt: { type: Date, default: Date.now },
    tags: [{ type: String }],
    description: { type: String },
    media: [{ url: { type: String }, public_id: { type: String } }],
    variants: [
        {
            sku: { type: String },
            title: { type: String },
            price: { type: String },
            salePrice: { type: String },
            mediaUrl: { type: String, default: null },
        },
    ],
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
