import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "./../../UI/Button/Button";

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
    SPopup,
    SProductDisplay,
    SProductDisplayContainer,
    SPrompt,
    SPromptButtonContainer,
    SPromptContainer,
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
import { productActions } from "../../../store/product-slice";

const initialEditProduct = (product) => {};

const ProductDisplay = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { currentProduct } = useSelector((state) => state.product);
    const [product, setProduct] = useState(null);
    const [edits, setEdits] = useState({});

    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id]);
    useEffect(() => {
        setProduct({ ...currentProduct });
    }, [currentProduct]);

    const inputChangeHandler = (e) => {
        setProduct((p) => ({ ...p, [e.target.name]: e.target.value }));

        if (e.target.value !== currentProduct[e.target.name]) {
            setEdits((p) => ({ ...p, [e.target.name]: e.target.value }));
        } else {
            setEdits((p) => {
                delete p[e.target.name];
                return p;
            });
        }
    };

    useEffect(() => {
        if (Object.keys(edits).length === 0) {
            dispatch(productActions.changeIsEdited(false));
        } else {
            dispatch(productActions.changeIsEdited(true));
        }
    }, [edits, dispatch]);

    return (
        <>
            <>
                {Object.keys(edits).length !== 0 && (
                    <SPopup>
                        <SPromptContainer>
                            <SPrompt>Unsaved Changes</SPrompt>
                            <SPromptButtonContainer>
                                <Button fixed secondary radius>
                                    Discard
                                </Button>
                                <Button fixed radius>
                                    Save
                                </Button>
                            </SPromptButtonContainer>
                        </SPromptContainer>
                    </SPopup>
                )}
            </>
            <SProductDisplay>
                <SProductDisplayContainer>
                    <SSectionOne>
                        <SCardControl>
                            <Card>
                                <SFormControl>
                                    <SLabel>Title</SLabel>
                                    <STITLEInput
                                        name="title"
                                        value={product?.title}
                                        onChange={inputChangeHandler}
                                    />
                                </SFormControl>
                                <SFormControl>
                                    <SLabel>Description</SLabel>
                                    <SDESCRIPTIONInput
                                        name="description"
                                        value={product?.description}
                                        onChange={inputChangeHandler}
                                    />
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
                                                        <SContentSpanHead center>
                                                            QTY
                                                        </SContentSpanHead>
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
                                                                        <STableImage
                                                                            src={bonesIMG}
                                                                        />
                                                                        <SImageOverlay />
                                                                    </STableImageContainer>
                                                                </STableBodyTD>
                                                                <STableBodyTD>
                                                                    <SContentSpan>
                                                                        {title}
                                                                    </SContentSpan>
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
        </>
    );
};

export default ProductDisplay;
