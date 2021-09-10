import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadMedia } from "../../../store/product-actions";
import { SIMAGEInput } from "./styles";

const ImageInput = ({ id, setFiles }) => {
    const dispatch = useDispatch();
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
            uploadImage(reader.result);
        };
    };
    const uploadImage = (base64EncodedImage) => {
        dispatch(uploadMedia({ base64Img: base64EncodedImage, id }));
    };
    return <SIMAGEInput type="file" value={file} onChange={fileChangeHandler} />;
};

export default ImageInput;
