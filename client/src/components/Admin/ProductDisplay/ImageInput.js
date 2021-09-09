import React, { useEffect, useState } from "react";
import { SIMAGEInput } from "./styles";

const ImageInput = ({ product, setFiles }) => {
    const [file, setFile] = useState("");

    const fileChangeHandler = (e) => {
        const newFile = e.target.files[0];
        setFile("");
        previewFile(newFile);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFiles((p) => [...p, reader.result]);
        };
    };
    return <SIMAGEInput type="file" value={file} onChange={fileChangeHandler} />;
};

export default ImageInput;
