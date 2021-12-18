import * as fs from "fs";
import { writeToFile } from "./config.js";

const createCollections = async () => {
    const collections = ["Collection One", "Collection Two", "Collection Three"].map((title) => {
        return {
            title,
            slug: title
                .split(" ")
                .map((str) => str[0].toLowerCase() + str.substring(1))
                .join("-"),
        };
    });
    await writeToFile(collections, "collections");
};

createCollections();
