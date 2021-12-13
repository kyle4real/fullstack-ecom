import * as fs from "fs";
import { artists, backdrops, readFromFile, writeToFile } from "./config.js";

const createProducts = async () => {
    const cloudinaryData = await readFromFile(`cloudinary`);
    const products = cloudinaryData.reduce((r, v, i) => {
        const sku = v.artist;
        const title = sku
            .split("-")
            .map((str) => str[0].toUpperCase() + str.substr(1))
            .join(" ");
        const description = `Custom ${title} inspired artwork carved into a vinyl record and framed with a backdrop of your choice.`;
        const media = v.files.reduce((r, v) => [...r, { public_id: v.public_id, url: v.url }], []);
        const variants = v.files.reduce((r, v) => {
            const variantSku = v.filename;
            const variantTitle = v.filename
                .replace(`${sku}-`, "")
                .split("-")
                .map((str) => str[0].toUpperCase() + str.substr(1))
                .join(" ");
            const { price, compareAtPrice } = getPrice(variantSku.includes("metallic"), i);
            const mediaUrl = v.url;
            return [
                ...r,
                { sku: variantSku, title: variantTitle, price, compareAtPrice, mediaUrl },
            ];
        }, []);
        const obj = {
            sku,
            title,
            description,
            media,
            variants,
        };
        return [...r, obj];
    }, []);
    await writeToFile(products, "products");
};

const getPrice = (upcharge, index) => {
    const sale = !!(index % 2);
    const basePrice = 60;
    const price =
        sale && upcharge
            ? basePrice - 5 + 2
            : sale
            ? basePrice - 5
            : upcharge
            ? basePrice + 2
            : basePrice;
    const compareAtPrice = upcharge ? basePrice + 2 : basePrice;
    return { price, compareAtPrice };
};

createProducts();
