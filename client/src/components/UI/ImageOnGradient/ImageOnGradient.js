import { useEffect, useRef, useState } from "react";
import { missingImg } from "../../../assets";
import { SImage, SImageContainer } from "./styles";

function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement("canvas"),
        context = canvas.getContext && canvas.getContext("2d"),
        data,
        width,
        height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
}

const getBase64Image = (src, callback, outputFormat) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        let dataURL;
        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
    };

    img.src = src;
    if (img.complete || img.complete === undefined) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = src;
    }
};

const ImageOnGradient = ({ url }) => {
    const imgRef = useRef();
    const [src, setSrc] = useState(missingImg);
    const [rgb, setRgb] = useState(null);

    useEffect(() => {
        if (!url) return;
        getBase64Image(url, (base) => {
            if (!base) return;
            setSrc(base);
            const img = new Image();
            img.src = base;
            setRgb(getAverageRGB(img));
        });
    }, [url]);

    useEffect(() => {
        console.log(rgb);
    }, [rgb]);

    const rgbString = rgb && Object.values(rgb).join(", ");
    const randomDeg = Math.round(Math.random() * 360);
    const gradient =
        rgb && `linear-gradient(${randomDeg}deg, rgba(${rgbString}, 1), rgba(${rgbString}, .3))`;
    return (
        <SImageContainer
            style={
                rgb && {
                    background: gradient,
                }
            }
        >
            <SImage ref={imgRef} src={src} />
        </SImageContainer>
    );
};
