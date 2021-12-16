import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
    url: { type: String },
    public_id: { type: String },
    position: { type: Number },
    product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
});

// Remove media refernces from any variants
MediaSchema.pre("remove", async function (next) {
    console.log("updating variants");
    await this.model("Variant").updateMany({ media: this._id }, { $set: { media: null } });
    await this.model("Media").updateMany(
        {
            position: { $gt: this.position },
            product: this.product,
        },
        { $inc: { position: -1 } }
    );
    next();
});

const Media = mongoose.model("Media", MediaSchema);
export default Media;
