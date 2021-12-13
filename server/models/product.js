import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        sku: { type: String, required: true },
        title: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        description: { type: String },
        image: { type: mongoose.Schema.ObjectId, ref: "Media" },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

ProductSchema.virtual("variants", {
    ref: "Variant",
    localField: "_id",
    foreignField: "product",
    justOne: false,
});
ProductSchema.virtual("media", {
    ref: "Media",
    localField: "_id",
    foreignField: "product",
    justOne: false,
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
