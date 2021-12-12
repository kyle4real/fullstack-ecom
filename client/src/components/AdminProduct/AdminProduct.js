import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../UI/Button/Button";

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
    SProductDisplayGrid,
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
import Card from "../UI/Card/Card";

import { missingImg } from "../../assets";
import { SCardContainer } from "../UI/Containers/styles";
import { SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";

// import ImageInput from "./ImageInput";

// import VariantImageSelect from "./VariantImageSelect/VariantImageSelect";
// import ImageFocus from "./ImageFocus/ImageFocus";

const AdminProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { product } = useSelector((state) => state.product);

    const [variantImageSelect, setVariantImageSelect] = useState(null);
    const [imageFocus, setImageFocus] = useState(null);

    const [edits, setEdits] = useState({});

    // const inputChangeHandler = (e) => {
    //     setProduct((p) => ({ ...p, [e.target.name]: e.target.value }));

    //     if (e.target.value !== currentProduct[e.target.name]) {
    //         setEdits((p) => ({ ...p, [e.target.name]: e.target.value }));
    //     } else {
    //         setEdits((p) => {
    //             delete p[e.target.name];
    //             return p;
    //         });
    //     }
    // };

    // useEffect(() => {
    //     if (Object.keys(edits).length === 0) {
    //         dispatch(productActions.changeIsEdited(false));
    //     } else {
    //         dispatch(productActions.changeIsEdited(true));
    //     }
    // }, [edits, dispatch]);

    const productImages = product?.media?.length === 0 ? null : product?.media;
    const slicedProductImages = product?.media?.length > 1 ? product?.media?.slice(1) : [];

    return (
        <>
            {/* <>
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
            </> */}
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
            <SProductDisplayGrid>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Product Information</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            <SLabel>Title</SLabel>
                            <STITLEInput
                                name="title"
                                value={product?.title || ""}
                                // onChange={inputChangeHandler}
                            />
                        </SFormControl>
                        <SFormControl>
                            <SLabel>Description</SLabel>
                            <SDESCRIPTIONInput
                                name="description"
                                value={product?.description || ""}
                                // onChange={inputChangeHandler}
                            />
                        </SFormControl>
                    </SCardContainer>

                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Media</SSectionHeadTitle>
                        </SSectionHeadContainer>

                        <SMedia>
                            <SMainImageContainer
                                onClick={() =>
                                    productImages && setImageFocus(product?.media?.[0]?.url)
                                }
                            >
                                <SMainImage src={product?.media?.[0]?.url || missingImg} />
                                <SImageOverlay />
                                {/* {!productImages && <ImageInput id={id} />} */}
                            </SMainImageContainer>
                            <SImagesContainer>
                                {slicedProductImages.map(({ url }, index) => (
                                    <SImageContainer key={index} onClick={() => setImageFocus(url)}>
                                        <SMainImage src={url} />
                                        <SImageOverlay />
                                    </SImageContainer>
                                ))}
                            </SImagesContainer>
                        </SMedia>

                        <SMediaBottomBar>
                            {/* {(loading.imageUpload || loading.imageDelete) && (
                                        <Spinner size={`30px`} />
                                    )} */}
                            <Button
                                secondaryRadius
                                fixed
                                absolute
                                // disabled={loading.imageUpload || loading.imageDelete}
                            >
                                Add Image
                                {/* <ImageInput id={id} /> */}
                            </Button>
                        </SMediaBottomBar>
                    </SCardContainer>

                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Variants</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SVariantsContainer>
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
                                        {product &&
                                            product?.variants?.map((variant, index) => {
                                                const { title, price, mediaUrl } = variant;
                                                return (
                                                    <STableBodyTR key={index}>
                                                        <STableBodyTD>
                                                            <STableImageContainer
                                                                onClick={() =>
                                                                    setVariantImageSelect(variant)
                                                                }
                                                            >
                                                                <STableImage
                                                                    src={mediaUrl || missingImg}
                                                                />
                                                                <SImageOverlay />
                                                            </STableImageContainer>
                                                        </STableBodyTD>
                                                        <STableBodyTD>
                                                            <SContentSpan>{title}</SContentSpan>
                                                        </STableBodyTD>
                                                        <STableBodyTD>
                                                            <SContentSpan>${price}</SContentSpan>
                                                        </STableBodyTD>
                                                        <STableBodyTD>
                                                            <SContentSpan center>3</SContentSpan>
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
                    </SCardContainer>
                </div>
                <div>
                    <Card>yo</Card>
                </div>
            </SProductDisplayGrid>
        </>
    );
};

export default AdminProduct;
