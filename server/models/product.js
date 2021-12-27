import mongoose from "mongoose";
import Media from "./Media.js";
import Variant from "./Variant.js";

const ProductSchema = new mongoose.Schema(
    {
        sku: { type: String, required: true },
        title: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        description: { type: String },
        image: { type: mongoose.Schema.ObjectId, ref: "Media" },
        status: { type: String, enum: ["active", "archived"] },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

ProductSchema.pre("remove", async function (next) {
    await Media.deleteMany({ product: this._id });
    await Variant;
});

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
ProductSchema.virtual("collections", {
    ref: "Collection",
    localField: "_id",
    foreignField: "products",
    justOne: false,
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
