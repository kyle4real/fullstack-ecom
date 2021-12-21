import * as fs from "fs";

export const artists = [
    "beatles-abbey-road",
    "eagles-hotel-california",
    "grateful-dead-city",
    "sublime",
    "2pac",
    "queen",
    "prince",
    "pink-floyd-animals",
    "drake",
    "bruce-springsteen",
    "misfits",
    "johnny-cash",
];
export const backdrops = [
    { backdrop: "yellow", order: 3 },
    { backdrop: "white", order: 1 },
    { backdrop: "royal-blue", order: 2 },
    { backdrop: "red", order: 4 },
    { backdrop: "purple", order: 5 },
    { backdrop: "psychedelic", order: 6 },
    { backdrop: "pink", order: 7 },
    { backdrop: "orange", order: 8 },
    { backdrop: "moss-green", order: 9 },
    { backdrop: "metallic-silver", order: 10 },
    { backdrop: "metallic-gold", order: 11 },
    { backdrop: "metallic-copper", order: 12 },
    { backdrop: "lime-green", order: 13 },
    { backdrop: "light-blue", order: 14 },
    { backdrop: "lavender", order: 15 },
    { backdrop: "hot-pink", order: 16 },
    { backdrop: "holographic", order: 17 },
    { backdrop: "green", order: 18 },
    { backdrop: "forrest-green", order: 19 },
    { backdrop: "dark-red", order: 20 },
    { backdrop: "cream", order: 21 },
    { backdrop: "charcoal", order: 22 },
    { backdrop: "bright-blue", order: 23 },
    { backdrop: "blue-gradient", order: 24 },
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

export const readFromFile = async (fileName) => {
    return new Promise((resolve, reject) => {
        const file = `./data/${fileName}.json`;
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) return reject(err);
            resolve(JSON.parse(data));
        });
    });
};

// TEMP: get arr of backdrops
// let arr = await readFromFile("cloudinary");
// const sku = arr[0].artist;
// arr = arr[0].files.reduce((r, v) => {
//     const handle = v.filename.replace(`${sku}-`, "");
//     return [...r, { backdrop: handle }];
// }, []);
// console.log(arr);
