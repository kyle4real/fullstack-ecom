import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
});

const Collection = mongoose.model("Collection", CollectionSchema);
export default Collection;
