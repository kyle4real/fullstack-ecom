import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    products: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],
});

const Collection = mongoose.model("Collection", CollectionSchema);
export default Collection;
