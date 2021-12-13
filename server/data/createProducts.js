import * as fs from "fs";
import { artists, backdrops, readFromFile } from "./config.js";

const createProducts = async () => {
    const cloudinaryData = await readFromFile(`cloudinary`);
    const products = cloudinaryData.reduce((r, v, i) => {
        const sku = v.artist;
        const title = sku
            .split("-")
            .map((str) => str[0].toUpperCase() + str.substr(1))
            .join(" ");
        const price = i % 2 ? 55 : 60;
        const compareAtPrice = 60;
        const description = `Custom ${title} inspired artwork carved into a vinyl record and framed with a backdrop of your choice.`;
        const obj = {};
        return [...r, obj];
    }, []);
};

createProducts();
