import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

import "colors";

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import { chunkify } from "./data/testing.js";

// Load Models
import Product from "./models/Product.js";
import Media from "./models/Media.js";
import Variant from "./models/Variant.js";
import Collection from "./models/Collection.js";

// Connect DB
mongoose.connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Read JSON files
let products = JSON.parse(
    fs.readFileSync(`${dirname(fileURLToPath(import.meta.url))}/data/products.json`, "utf-8")
);
let collections = JSON.parse(
    fs.readFileSync(`${dirname(fileURLToPath(import.meta.url))}/data/collections.json`, "utf-8")
);

const importData = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const productIds = [];
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                const { media: mediaArr, variants: variantsArr } = products[i];
                product = await Product.create(product);
                productIds.push(product._id);
                const productId = product._id;
                const mediaURLHash = {};
                for (let j = 0; j < mediaArr.length; j++) {
                    var media = { ...mediaArr[j], product: productId };
                    media = await Media.create(media);
                    mediaURLHash[media.url] = media;
                    if (media.position === 1) {
                        product.image = media._id;
                        await product.save();
                    }
                }
                for (let j = 0; j < variantsArr.length; j++) {
                    let { mediaUrl } = variantsArr[j];
                    const assignedMediaId = mediaURLHash[mediaUrl]._id;
                    let variant = {
                        ...variantsArr[j],
                        product: productId,
                        media: assignedMediaId,
                        compare_at_price: variantsArr[j].compareAtPrice,
                    };
                    variant = await Variant.create(variant);
                }
            }
            var s = productIds.length;
            var a = [...productIds];
            var n = collections.length;
            const productChunks = chunkify(a, n, true);
            for (let i = 0; i < n; i++) {
                let collection = collections[i];
                let productChunk = productChunks[i];
                collection.products = productChunk;
                await Collection.create(collection);
            }

            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

const deleteData = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await Product.deleteMany();
            await Media.deleteMany();
            await Variant.deleteMany();
            await Collection.deleteMany();

            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

if (process.argv[2] === "-i") {
    try {
        await importData();
        console.log(`DATA IMPORTED`.green.inverse);
    } catch (error) {
        console.log(error);
    } finally {
        process.exit();
    }
} else if (process.argv[2] === "-d") {
    try {
        await deleteData();
        console.log(`DATA DELETED`.red.inverse);
    } catch (error) {
        console.log(error);
    } finally {
        process.exit();
    }
}
