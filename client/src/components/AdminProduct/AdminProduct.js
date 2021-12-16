import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/Button/Button";

import {
    SImage,
    SMainMediaContainer,
    SMediaBottomBar,
    SMediaContainer,
    SMediaGrid,
    SProductDisplayGrid,
} from "./styles";

import { missingImg } from "../../assets";
import { SCardContainer } from "../UI/Containers/styles";
import { SImageOverlay, SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SFormControl, SInput, SLabel, SSelect, SSelectOption, STextArea } from "../UI/Form/styles";

import { useMemo } from "react";
import ImageInput from "../UI/ImageInput/ImageInput";
import MediaFocus from "../UI/MediaFocus/MediaFocus";
import UnsavedChanges from "../UI/UnsavedChanges/UnsavedChanges";

import Loading from "../UI/Loading/Loading";

import VariantsTable from "./VariantsTable/VariantsTable";
import { onProductEdit, onVariantEdit } from "./helpers";
import { updateProduct } from "../../app/actions/product-actions_admin";

const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});

const AdminProduct = () => {
    const dispatch = useDispatch();

    const { product, productLoading, mediaLoading } = useSelector((state) => state.product);
    const [mediaSelectIndex, setMediaSelectIndex] = useState(null);

    const [productFormEdits, setProductFormEdits] = useState(null);
    const [variantFormEdits, setVariantFormEdits] = useState(null);

    const onCancelHandler = () => {
        setProductFormEdits(null);
        setVariantFormEdits(null);
    };
    const onSaveHandler = () => {
        if (!variantFormEdits && !productFormEdits) return;
        const productObj = productFormEdits ? { ...productFormEdits } : {};
        if (variantFormEdits) {
            var variants = Object.keys(variantFormEdits).reduce((r, v) => {
                return [...r, { _id: v, ...variantFormEdits[v] }];
            }, []);
            productObj.variants = variants;
        }
        dispatch(
            updateProduct(product._id, productObj, () => {
                onCancelHandler();
            })
        );
    };

    const productEditHandler = (e) => {
        setProductFormEdits((prevState) => onProductEdit(prevState, e, product));
    };
    const variantInputEditHandler = (e) => {
        setVariantFormEdits((prevState) => onVariantEdit(prevState, e, product));
    };

    const edits = useMemo(
        () => !!variantFormEdits || !!productFormEdits,
        [variantFormEdits, productFormEdits]
    );

    const mediaSelectHandler = (index) => setMediaSelectIndex(index);

    const { mainMedia, media } = useMemo(() => {
        let media = product.media;
        if (!media.length) return { mainMedia: { url: missingImg, _id: null }, media: [] };
        media = [...media].sort((a, b) => a.position - b.position);
        if (media.length === 1) return { mainMedia: media[0], media: [] };
        else return { mainMedia: media[0], media: media.slice(1) };
    }, [product.media]);

    const loading = productLoading;
    return (
        <>
            {mediaSelectIndex !== null && (
                <MediaFocus
                    product={product}
                    media={[...product.media].sort((a, b) => a.position - b.position)}
                    mediaSelectIndex={mediaSelectIndex}
                    onMediaSelect={mediaSelectHandler}
                />
            )}

            <UnsavedChanges
                show={edits}
                loading={loading}
                onSave={onSaveHandler}
                onCancel={onCancelHandler}
            />

            <SProductDisplayGrid>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Product Information</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            <SLabel>Title</SLabel>
                            {(() => {
                                const value = productFormEdits?.["title"] || product["title"];
                                return (
                                    <SInput
                                        name="title"
                                        value={value}
                                        onChange={(e) => productEditHandler(e)}
                                    />
                                );
                            })()}
                        </SFormControl>
                        <SFormControl>
                            <SLabel>Description</SLabel>
                            {(() => {
                                const value =
                                    productFormEdits?.["description"] || product["description"];
                                return (
                                    <STextArea
                                        name="description"
                                        value={value}
                                        onChange={(e) => productEditHandler(e)}
                                    />
                                );
                            })()}
                        </SFormControl>
                    </SCardContainer>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Media</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SMediaGrid>
                            <SMainMediaContainer>
                                <SImage src={mainMedia.url} />
                                <SImageOverlay onClick={() => mediaSelectHandler(0)} />
                            </SMainMediaContainer>
                            {media.map(({ url, _id }, index) => (
                                <SMediaContainer key={index}>
                                    <SImage src={url} />
                                    <SImageOverlay onClick={() => mediaSelectHandler(index + 1)} />
                                </SMediaContainer>
                            ))}
                        </SMediaGrid>
                        <SMediaBottomBar>
                            <Button secondaryRadius fixed absolute disabled={mediaLoading}>
                                {!mediaLoading ? "Add Image" : <Loading />}
                                <ImageInput productId={product._id} disabled={mediaLoading} />
                            </Button>
                        </SMediaBottomBar>
                    </SCardContainer>
                    <SCardContainer>
                        {(() => {
                            return (
                                <VariantsTable
                                    onVariantInputEdit={variantInputEditHandler}
                                    variantFormEdits={variantFormEdits}
                                />
                            );
                        })()}
                    </SCardContainer>
                </div>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Product Status</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            {(() => {
                                const value = productFormEdits?.["status"] || product["status"];
                                return (
                                    <SSelect
                                        name="status"
                                        value={value}
                                        onChange={(e) => productEditHandler(e)}
                                    >
                                        {["active", "archived"].map((option, index) => (
                                            <SSelectOption key={index}>{option}</SSelectOption>
                                        ))}
                                    </SSelect>
                                );
                            })()}
                        </SFormControl>
                    </SCardContainer>
                </div>
            </SProductDisplayGrid>
        </>
    );
};

// <SMainImageContainer
//                                 onClick={() =>
//                                     productImages && setImageFocus(product?.media?.[0]?.url)
//                                 }
//                             >
//                                 <SMainImage src={product?.media?.[0]?.url || missingImg} />
//                                 <SImageOverlay />
//                                 {/* {!productImages && <ImageInput id={id} />} */}
//                             </SMainImageContainer>
//                             <SImagesContainer>
//                                 {slicedProductImages.map(({ url }, index) => (
//                                     <SImageContainer key={index} onClick={() => setImageFocus(url)}>
//                                         <SMainImage src={url} />
//                                         <SImageOverlay />
//                                     </SImageContainer>
//                                 ))}
//                             </SImagesContainer>

export default AdminProduct;
