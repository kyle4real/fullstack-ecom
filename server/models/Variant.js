import mongoose from "mongoose";

const VariantSchema = new mongoose.Schema(
    {
        title: { type: String },
        sku: { type: String, default: null },
        price: { type: Number },
        compare_at_price: { type: Number },
        product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
        media: { type: mongoose.Schema.ObjectId, ref: "Media" },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Variant = mongoose.model("Variant", VariantSchema);
export default Variant;
