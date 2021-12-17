import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
    url: { type: String },
    public_id: { type: String },
    position: { type: Number },
    product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
});

MediaSchema.pre("save", async function (next) {
    if (!this.isModified("position") || this.position !== 1) return next();
    await this.model("Product").findByIdAndUpdate(this.product, { image: this._id });
    next();
});

// Remove media refernces from any variants
MediaSchema.pre("remove", async function (next) {
    await this.model("Variant").updateMany({ media: this._id }, { $set: { media: null } });
    const mediaArr = await this.model("Media").find({
        position: { $gt: this.position },
        product: this.product,
    });
    for (let i = 0; i < mediaArr.length; i++) {
        let media = mediaArr[i];
        media.position--;
        await media.save();
    }
    next();
});

const Media = mongoose.model("Media", MediaSchema);
export default Media;
