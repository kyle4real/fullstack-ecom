import { artists, backdrops, writeToFile } from "./config.js";
import cloudinary from "../config/cloudinary.js";
import "colors";

const getSelectFiles = (targetFolder, res, backdrops) => {
    const filtered = res.filter((file) => {
        const backdropName = file.filename.replace(`${targetFolder}-`, "");
        return backdrops.includes(backdropName);
    });
    return filtered;
};

const fetchFromCloudinary = async (folder, backdrops) => {
    const fetchFolder = async (folder) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { resources } = await cloudinary.search
                    .expression(`folder:shopify/${folder}/*`)
                    .execute();
                return resolve(resources);
            } catch (error) {
                return reject(error);
            }
        });
    };

    const arr = [];
    await artists.reduce((r, v, i) => {
        return r
            .then(() => {
                console.log(`Fetching ${v}...`.magenta);
                return fetchFolder(v);
            })
            .then((res) => {
                console.log(`Fetched ${v} files`.green.bold);
                const targetFolder = v;
                const files = getSelectFiles(targetFolder, res, backdrops);
                arr.push({ artist: v, files });
            })
            .catch((err) => {
                return console.log(err);
            });
    }, Promise.resolve());

    return arr;
};

const main = async () => {
    const arr = await fetchFromCloudinary(artists, backdrops);
    try {
        await writeToFile(arr, `cloudinary`);
        console.log(`JSON Created`.green.underline);
    } catch (error) {
        console.log(error);
    }
};

main();
