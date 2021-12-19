import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { useHistory, useRouteMatch } from "react-router-dom";

import { missingImg } from "../../assets";
import { SImage, SImageContainer, STBodyTRVariant, STDImage, STDVariant } from "./styles";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "../UI/Table/styles";
import Table from "../UI/Table/Table";

const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});

const AdminProducts = () => {
    const history = useHistory();
    const { url } = useRouteMatch();

    const { products } = useSelector((state) => state.products);

    const productClickHandler = (id) => history.push(`${url}/${id}`);

    const trArr = products.reduce((r, v) => {
        const variants = v.variants;
        const [lowestPrice, highestPrice] = variants.reduce(
            (r, v) => {
                let curLowest = r[0];
                let curHighest = r[1];
                if (v.price < curLowest) curLowest = v.price;
                if (v.price > curHighest) curHighest = v.price;
                return [curLowest, curHighest];
            },
            Array.from({ length: 2 }, () => variants?.[0]?.price || null)
        );
        const formattedLowest = priceFormatter.format(lowestPrice);
        const formattedHighest = priceFormatter.format(highestPrice);
        let price;
        if (lowestPrice === highestPrice) price = formattedLowest;
        else if (!lowestPrice) price = `N/A`;
        else price = `${formattedLowest} - ${formattedHighest}`;

        const variantCount = variants.length;
        let product = { ...v, price, variantCount: variantCount };
        return [...r, product];
    }, []);
    const thArr = ["Title", "Status", "Price", "Variants"];
    const displayKeys = ["title", "status", "price", "variantCount"];

    const table = <Table trArr={trArr} displayKeys={displayKeys} thArr={thArr} />;
    return table;
};

// const [lowestPrice, highestPrice] = variants.reduce(
//     (r, v) => {
//         let curLowest = r[0];
//         let curHighest = r[1];
//         if (v.price < curLowest) curLowest = v.price;
//         if (v.price > curHighest) curHighest = v.price;
//         return [curLowest, curHighest];
//     },
//     [variants[0].price, variants[0].price]
// );
// let priceString = `N/A`;
// if (lowestPrice === highestPrice) {
//     priceString = priceFormatter.format(lowestPrice);
// } else {
//     priceString = `${priceFormatter.format(
//         lowestPrice
//     )} - ${priceFormatter.format(highestPrice)}`;
// }

export default AdminProducts;
