import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { useHistory, useRouteMatch } from "react-router-dom";

import { missingImg } from "../../../assets";

import {
    SContentContainer,
    SContentImg,
    SContentImgContainer,
    SContentSpan,
    SContentSpanBare,
    SContentSpanHead,
    SContentSpanStatus,
    SProductTable,
    STable,
    STableBody,
    STableBodyTD,
    STableBodyTR,
    STableContainer,
    STableHead,
    STableHeadTH,
    STableHeadTR,
    SVariantContainer,
    SVariantSpan,
    SVariantSpanBare,
    SVariantSpanStatus,
} from "./styles";
import useWindowSize from "../../../hooks/useWindowSize";

const ProductTable = () => {
    const { isMin } = useWindowSize({ size: "sm" });
    const history = useHistory();

    const { url } = useRouteMatch();
    const { products } = useSelector((state) => state.products);

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
                                {!isMin && (
                                    <>
                                        <STableHeadTH>
                                            <SContentSpanHead>Price</SContentSpanHead>
                                        </STableHeadTH>
                                        <STableHeadTH>
                                            <SContentSpanHead center>QTY</SContentSpanHead>
                                        </STableHeadTH>
                                    </>
                                )}
                            </STableHeadTR>
                        </STableHead>
                        <STableBody>
                            {products?.map?.(
                                ({ title, price, variants, _id: id, media }, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <STableBodyTR
                                                clickable
                                                onClick={() => productSelectHandler(id)}
                                            >
                                                <STableBodyTD>
                                                    <SContentImgContainer>
                                                        <SContentImg
                                                            src={media?.[0]?.url || missingImg}
                                                        />
                                                    </SContentImgContainer>
                                                </STableBodyTD>
                                                <STableBodyTD>
                                                    <SContentContainer>
                                                        <SContentSpanBare>{title}</SContentSpanBare>
                                                        <SContentSpanStatus>
                                                            Active
                                                        </SContentSpanStatus>
                                                    </SContentContainer>
                                                </STableBodyTD>
                                                {!isMin && (
                                                    <>
                                                        <STableBodyTD>
                                                            <SContentSpan>${price}.00</SContentSpan>
                                                        </STableBodyTD>
                                                        <STableBodyTD>
                                                            <SContentSpan center>3</SContentSpan>
                                                        </STableBodyTD>
                                                    </>
                                                )}
                                            </STableBodyTR>
                                            {variants.length > 1 &&
                                                variants.map(
                                                    (
                                                        { title: variantTitle, price, mediaId },
                                                        index
                                                    ) => {
                                                        return (
                                                            <STableBodyTR key={index}>
                                                                <STableBodyTD></STableBodyTD>
                                                                <STableBodyTD>
                                                                    <SVariantContainer>
                                                                        <SVariantSpanBare>
                                                                            {variantTitle}
                                                                        </SVariantSpanBare>
                                                                        <SVariantSpanStatus>
                                                                            Active
                                                                        </SVariantSpanStatus>
                                                                    </SVariantContainer>
                                                                </STableBodyTD>
                                                                {!isMin && (
                                                                    <>
                                                                        <STableBodyTD>
                                                                            <SVariantSpan>
                                                                                ${price}.00
                                                                            </SVariantSpan>
                                                                        </STableBodyTD>
                                                                        <STableBodyTD>
                                                                            <SVariantSpan center>
                                                                                3
                                                                            </SVariantSpan>
                                                                        </STableBodyTD>
                                                                    </>
                                                                )}
                                                            </STableBodyTR>
                                                        );
                                                    }
                                                )}
                                        </Fragment>
                                    );
                                }
                            )}
                        </STableBody>
                    </STable>
                </>
            </STableContainer>
        </SProductTable>
    );
};

export default ProductTable;
