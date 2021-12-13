import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

import "colors";

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

// Load Models
import Product from "./models/Product.js";

// Connect DB
mongoose.connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Read JSON files
let products = JSON.parse(
    fs.readFileSync(`${dirname(fileURLToPath(import.meta.url))}/data/products.json`, "utf-8")
);

const importData = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await Product.create(products);

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
