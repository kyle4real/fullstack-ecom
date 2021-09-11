import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "./../../UI/Button/Button";

import {
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
    SMediaBottomBar,
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

import { missingImg } from "../../../assets";
import { getProduct } from "../../../store/product-actions";
import { productActions } from "../../../store/product-slice";
import ImageInput from "./ImageInput";

import VariantImageSelect from "./VariantImageSelect/VariantImageSelect";
import ImageFocus from "./ImageFocus/ImageFocus";
import Loading, { Spinner } from "../../UI/Loading/Loading";

const ProductDisplay = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { currentProduct } = useSelector((state) => state.product);
    const { loading } = useSelector((state) => state.ui);

    const [variantImageSelect, setVariantImageSelect] = useState(null);
    const [imageFocus, setImageFocus] = useState(null);

    const [product, setProduct] = useState(null);
    const [edits, setEdits] = useState({});

    useEffect(() => {
        dispatch(getProduct(id));
        return () => {
            dispatch(productActions.replaceCurrentProduct({ data: { result: null } }));
        };
    }, [dispatch, id]);
    useEffect(() => {
        setProduct({ ...currentProduct });
        return () => {
            setProduct(null);
        };
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

    const productImages = product?.media?.length === 0 ? null : product?.media;
    const slicedProductImages = product?.media?.length > 1 ? product?.media?.slice(1) : [];

    if (loading.productDisplay) {
        return (
            <>
                <Loading fixed />
            </>
        );
    }
    return (
        <>
            <>
                {variantImageSelect !== null && (
                    <VariantImageSelect
                        images={productImages}
                        variant={variantImageSelect}
                        setVariantImageSelect={setVariantImageSelect}
                        id={id}
                    />
                )}
            </>
            <>
                {imageFocus !== null && (
                    <ImageFocus
                        images={productImages}
                        imageFocus={imageFocus}
                        setImageFocus={setImageFocus}
                        productTitle={product?.title}
                        id={id}
                    />
                )}
            </>
            <>
                {Object.keys(edits).length !== 0 && (
                    <SPopup>
                        <SPromptContainer>
                            <SPrompt>Unsaved Changes</SPrompt>
                            <SPromptButtonContainer>
                                <Button fixed secondary secondaryRadius>
                                    Discard
                                </Button>
                                <Button fixed secondaryRadius>
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
                                        value={product?.title || ""}
                                        onChange={inputChangeHandler}
                                    />
                                </SFormControl>
                                <SFormControl>
                                    <SLabel>Description</SLabel>
                                    <SDESCRIPTIONInput
                                        name="description"
                                        value={product?.description || ""}
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
                                        <SMainImageContainer
                                            onClick={() =>
                                                productImages &&
                                                setImageFocus(product?.media?.[0]?.url)
                                            }
                                        >
                                            <SMainImage
                                                src={product?.media?.[0]?.url || missingImg}
                                            />
                                            <SImageOverlay />
                                            {!productImages && <ImageInput id={id} />}
                                        </SMainImageContainer>
                                        <SImagesContainer>
                                            {slicedProductImages.map(({ url }, index) => (
                                                <SImageContainer
                                                    key={index}
                                                    onClick={() => setImageFocus(url)}
                                                >
                                                    <SMainImage src={url} />
                                                    <SImageOverlay />
                                                </SImageContainer>
                                            ))}
                                        </SImagesContainer>
                                    </SMedia>
                                </SMediaContainer>
                                <SMediaBottomBar>
                                    {(loading.imageUpload || loading.imageDelete) && (
                                        <Spinner size={`30px`} />
                                    )}
                                    <Button
                                        secondaryRadius
                                        fixed
                                        absolute
                                        disabled={loading.imageUpload || loading.imageDelete}
                                    >
                                        Add Image
                                        <ImageInput id={id} />
                                    </Button>
                                </SMediaBottomBar>
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
                                                {product &&
                                                    product?.variants?.map((variant, index) => {
                                                        const { title, price, mediaUrl } = variant;
                                                        return (
                                                            <STableBodyTR key={index}>
                                                                <STableBodyTD>
                                                                    <STableImageContainer
                                                                        onClick={() =>
                                                                            setVariantImageSelect(
                                                                                variant
                                                                            )
                                                                        }
                                                                    >
                                                                        <STableImage
                                                                            src={
                                                                                mediaUrl ||
                                                                                missingImg
                                                                            }
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
                                                        );
                                                    })}
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
