import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { useHistory, useRouteMatch } from "react-router-dom";

import { missingImg } from "../../assets";
import { SImage, SImageContainer, STBodyTRVariant, STDImage, STDVariant } from "./styles";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "../UI/Table/styles";

const AdminProducts = () => {
    const history = useHistory();
    const { url } = useRouteMatch();

    const { products } = useSelector((state) => state.products);

    const productClickHandler = (id) => history.push(`${url}/${id}`);

    const trArr = products.reduce((r, v) => [...r, { ...v, status: "active" }], []);

    const displayKeys = ["title", "status", "price"];
    const variantDisplayKeys = ["title", "status", "price"];

    return (
        <STable>
            <STHead>
                <STHeadTR>
                    <STH />
                    <STH />
                    <STH>Product</STH>
                    <STH desktop>Status</STH>
                    <STH>Price</STH>
                </STHeadTR>
            </STHead>
            <STBody>
                {trArr.map((product, index) => {
                    const productId = product._id;
                    const img = product?.image?.url || missingImg;
                    return (
                        <Fragment key={index}>
                            <STBodyTR
                                style={{ cursor: "pointer" }}
                                onClick={() => productClickHandler(productId)}
                            >
                                <STD>{index + 1}</STD>
                                <STDImage>
                                    <SImageContainer>
                                        <SImage src={img} />
                                    </SImageContainer>
                                </STDImage>
                                {displayKeys.map((key, index) => {
                                    let value = product[key];
                                    if (key === "price") value = `$${value}`;
                                    let desktop = key === "status";
                                    return (
                                        <STD key={index} desktop={desktop}>
                                            {value}
                                        </STD>
                                    );
                                })}
                            </STBodyTR>
                            {product.variants.map((variant, index) => (
                                <STBodyTRVariant key={index}>
                                    <STDVariant>{index + 1}</STDVariant>
                                    <STDVariant />
                                    {variantDisplayKeys.map((key, index) => {
                                        let value = variant[key];
                                        if (key === "price") value = `$${value}`;
                                        let desktop = key === "status";
                                        return (
                                            <STDVariant key={index} desktop={desktop}>
                                                {value}
                                            </STDVariant>
                                        );
                                    })}
                                </STBodyTRVariant>
                            ))}
                        </Fragment>
                    );
                })}
            </STBody>
        </STable>
    );
};

export default AdminProducts;
