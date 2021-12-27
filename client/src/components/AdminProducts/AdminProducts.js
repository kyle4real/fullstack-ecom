import React from "react";
import { useSelector } from "react-redux";

import { useHistory, useRouteMatch } from "react-router-dom";
import { missingImg } from "../../assets";
import { priceFormatter } from "../../utils/priceFormat";
import Button from "../UI/Button/Button";
import { STDContained } from "../UI/Table/styles";

import Table from "../UI/Table/Table";
import TableContainer from "../UI/TableContainer/TableContainer";
import { SImage, SImageContainer } from "./styles";

const TableImageDisplay = ({ value }) => {
    const src = value?.url || missingImg;
    return (
        <STDContained>
            <SImageContainer>
                <SImage src={src} />
            </SImageContainer>
        </STDContained>
    );
};

const AdminProducts = () => {
    const { url } = useRouteMatch();
    const history = useHistory();
    const { products } = useSelector((state) => state.products);

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

        const hasVariants = !(variants.length === 1 && variants[0].sku === null);
        const variantCount = hasVariants ? variants.length : `None`;
        let product = { ...v, price, variantCount: variantCount };
        return [...r, product];
    }, []);
    const thArr = ["", "Title", "Status", "Price", "Variants"];
    const displayKeys = [
        ["image", (value) => <TableImageDisplay value={value} />],
        "title",
        "status",
        "price",
        "variantCount",
    ];

    const addButton = <Button onClick={() => history.push(`${url}/new`)}>Add Product</Button>;
    return (
        <TableContainer placeholder={"Search Products"} title={"Products"} addButton={addButton}>
            <Table
                trArr={trArr}
                displayKeys={displayKeys}
                thArr={thArr}
                trLinks={{ to: `${url}`, target: "_id" }}
            />
        </TableContainer>
    );
};

export default AdminProducts;
