import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMedia } from "../../../app/actions/product-actions_admin";
// import { uploadMedia } from "../../../app/actions/product-actions";
import { SImageInput } from "./styles";

const ImageInput = ({ productId, disabled }) => {
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
            uploadImage(reader.result);
        };
    };
    const uploadImage = (base64EncodedImage) => {
        dispatch(addMedia(productId, base64EncodedImage));
    };
    return (
        <SImageInput
            type="file"
            value={file}
            onChange={fileChangeHandler}
            title=" "
            disabled={disabled}
        />
    );
};

export default ImageInput;
