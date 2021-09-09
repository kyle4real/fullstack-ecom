import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
    SAddImage,
    SAddImageIcon,
    SCardControl,
    SContentContainer,
    SContentSpan,
    SContentSpanHead,
    SDeleteIcon,
    SDESCRIPTIONInput,
    SEditIcon,
    SFormControl,
    SIconsContainer,
    SImageContainer,
    SImageOverlay,
    SImagesContainer,
    SLabel,
    SLabelSpan,
    SMainImage,
    SMainImageContainer,
    SMedia,
    SMediaContainer,
    SProductDisplay,
    SProductDisplayContainer,
    SSectionOne,
    SSectionTwo,
    STable,
    STableBody,
    STableBodyTD,
    STableBodyTR,
    STableHead,
    STableHeadTH,
    STableHeadTR,
    STableImage,
    STableImageContainer,
    STITLEInput,
    SVariantsContainer,
    SVariantsHead,
} from "./styles";
import Card from "../../UI/Card/Card";

import { bonesIMG } from "../../../assets";
import { getProduct } from "../../../store/product-actions";

const ProductDisplay = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { currentProduct } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id]);

    useEffect(() => {
        console.log(currentProduct);
    }, [currentProduct]);

    return (
        <SProductDisplay>
            <SProductDisplayContainer>
                <SSectionOne>
                    <SCardControl>
                        <Card>
                            <SFormControl>
                                <SLabel>Title</SLabel>
                                <STITLEInput />
                            </SFormControl>
                            <SFormControl>
                                <SLabel>Description</SLabel>
                                <SDESCRIPTIONInput />
                            </SFormControl>
                        </Card>
                    </SCardControl>
                    <SCardControl>
                        <Card>
                            <SMediaContainer>
                                <SLabelSpan>Media</SLabelSpan>
                                <SMedia>
                                    <SMainImageContainer>
                                        <SMainImage src={bonesIMG} />
                                        <SImageOverlay></SImageOverlay>
                                    </SMainImageContainer>
                                    <SImagesContainer>
                                        <SImageContainer>
                                            <SAddImage>
                                                <SAddImageIcon />
                                            </SAddImage>
                                        </SImageContainer>
                                        <SImageContainer>
                                            <SMainImage src={bonesIMG} />
                                            <SImageOverlay></SImageOverlay>
                                        </SImageContainer>
                                        <SImageContainer>
                                            <SMainImage src={bonesIMG} />
                                            <SImageOverlay></SImageOverlay>
                                        </SImageContainer>
                                        <SImageContainer>
                                            <SMainImage src={bonesIMG} />
                                            <SImageOverlay></SImageOverlay>
                                        </SImageContainer>
                                        <SImageContainer>
                                            <SMainImage src={bonesIMG} />
                                            <SImageOverlay></SImageOverlay>
                                        </SImageContainer>
                                    </SImagesContainer>
                                </SMedia>
                            </SMediaContainer>
                        </Card>
                    </SCardControl>
                    <SCardControl>
                        <Card>
                            <SVariantsContainer>
                                <SVariantsHead>
                                    <SLabelSpan>Variants</SLabelSpan>
                                </SVariantsHead>
                                <>
                                    <STable>
                                        <STableHead>
                                            <STableHeadTR>
                                                <STableHeadTH></STableHeadTH>
                                                <STableHeadTH>
                                                    <SContentSpanHead>Variant</SContentSpanHead>
                                                </STableHeadTH>
                                                <STableHeadTH>
                                                    <SContentSpanHead>Price</SContentSpanHead>
                                                </STableHeadTH>
                                                <STableHeadTH>
                                                    <SContentSpanHead center>QTY</SContentSpanHead>
                                                </STableHeadTH>
                                                <STableHeadTH></STableHeadTH>
                                            </STableHeadTR>
                                        </STableHead>
                                        <STableBody>
                                            {currentProduct &&
                                                currentProduct.variants.map(
                                                    ({ title, price }, index) => (
                                                        <STableBodyTR key={index}>
                                                            <STableBodyTD>
                                                                <STableImageContainer>
                                                                    <STableImage src={bonesIMG} />
                                                                    <SImageOverlay />
                                                                </STableImageContainer>
                                                            </STableBodyTD>
                                                            <STableBodyTD>
                                                                <SContentSpan>{title}</SContentSpan>
                                                            </STableBodyTD>
                                                            <STableBodyTD>
                                                                <SContentSpan>
                                                                    ${price}
                                                                </SContentSpan>
                                                            </STableBodyTD>
                                                            <STableBodyTD>
                                                                <SContentSpan center>
                                                                    3
                                                                </SContentSpan>
                                                            </STableBodyTD>
                                                            <STableBodyTD>
                                                                <SContentContainer>
                                                                    <SIconsContainer>
                                                                        <SDeleteIcon />
                                                                        <SEditIcon />
                                                                    </SIconsContainer>
                                                                </SContentContainer>
                                                            </STableBodyTD>
                                                        </STableBodyTR>
                                                    )
                                                )}
                                        </STableBody>
                                    </STable>
                                </>
                            </SVariantsContainer>
                        </Card>
                    </SCardControl>
                </SSectionOne>
                <SSectionTwo>
                    <Card>yo</Card>
                </SSectionTwo>
            </SProductDisplayContainer>
        </SProductDisplay>
    );
};

export default ProductDisplay;
