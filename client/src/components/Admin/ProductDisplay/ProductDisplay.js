import React from "react";
import { useSelector } from "react-redux";

import { SProductDisplay } from "./styles";

const ProductDisplay = () => {
    const { productsArray } = useSelector((state) => state.product);

    return <SProductDisplay></SProductDisplay>;
};

export default ProductDisplay;
