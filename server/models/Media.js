import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
    url: { type: String },
    public_id: { type: String },
    product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
});

const Media = mongoose.model("Media", MediaSchema);
export default Media;
