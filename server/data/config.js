import * as fs from "fs";

export const artists = [
    "beatles-abbey-road",
    "eagles-hotel-california",
    "grateful-dead-city",
    "sublime",
    "2pac",
    "queen",
];
export const backdrops = [
    "white",
    "orange",
    "red",
    "metallic-gold",
    "metallic-silver",
    "holographic",
    "pink",
    "green",
];

export const writeToFile = (data, fileName) => {
    return new Promise((resolve, reject) => {
        const json = JSON.stringify(data);
        fs.writeFile(`./data/${fileName}.json`, json, "utf-8", (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};
