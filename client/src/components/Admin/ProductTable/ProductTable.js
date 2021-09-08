import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/product-actions";

import { useHistory, useRouteMatch } from "react-router-dom";

import { bonesIMG } from "../../../assets";

import {
    SContentImg,
    SContentImgContainer,
    SContentSpan,
    SContentSpanHead,
    SProductTable,
    STable,
    STableBody,
    STableBodyTD,
    STableBodyTR,
    STableContainer,
    STableHead,
    STableHeadTH,
    STableHeadTR,
    SVariantSpan,
} from "./styles";

const ProductTable = () => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const dispatch = useDispatch();
    const { productsArray } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const productSelectHandler = (id) => {
        history.push(`${url}/${id}`);
    };

    return (
        <SProductTable>
            <STableContainer>
                <>
                    <STable>
                        <STableHead>
                            <STableHeadTR>
                                <STableHeadTH></STableHeadTH>
                                <STableHeadTH>
                                    <SContentSpanHead>Product</SContentSpanHead>
                                </STableHeadTH>
                                <STableHeadTH>
                                    <SContentSpanHead>Price</SContentSpanHead>
                                </STableHeadTH>
                                <STableHeadTH>
                                    <SContentSpanHead center>QTY</SContentSpanHead>
                                </STableHeadTH>
                            </STableHeadTR>
                        </STableHead>
                        <STableBody>
                            {productsArray.map(({ title, price, variants, _id: id }, index) => {
                                return (
                                    <Fragment key={index}>
                                        <STableBodyTR
                                            clickable
                                            onClick={() => productSelectHandler(id)}
                                        >
                                            <STableBodyTD>
                                                <SContentImgContainer>
                                                    <SContentImg src={bonesIMG} />
                                                </SContentImgContainer>
                                            </STableBodyTD>
                                            <STableBodyTD>
                                                <SContentSpan>{title}</SContentSpan>
                                            </STableBodyTD>
                                            <STableBodyTD>
                                                <SContentSpan>${price}.00 USD</SContentSpan>
                                            </STableBodyTD>
                                            <STableBodyTD>
                                                <SContentSpan center>3</SContentSpan>
                                            </STableBodyTD>
                                        </STableBodyTR>
                                        {variants.length > 1 &&
                                            variants.map(
                                                ({ title: variantTitle, price }, index) => {
                                                    return (
                                                        <STableBodyTR key={index}>
                                                            <STableBodyTD></STableBodyTD>
                                                            <STableBodyTD>
                                                                <SVariantSpan>
                                                                    {variantTitle}
                                                                </SVariantSpan>
                                                            </STableBodyTD>
                                                            <STableBodyTD>
                                                                <SVariantSpan>
                                                                    ${price}.00 USD
                                                                </SVariantSpan>
                                                            </STableBodyTD>
                                                            <STableBodyTD>
                                                                <SVariantSpan center>
                                                                    3
                                                                </SVariantSpan>
                                                            </STableBodyTD>
                                                        </STableBodyTR>
                                                    );
                                                }
                                            )}
                                    </Fragment>
                                );
                            })}
                        </STableBody>
                    </STable>
                </>
            </STableContainer>
        </SProductTable>
    );
};

export default ProductTable;
