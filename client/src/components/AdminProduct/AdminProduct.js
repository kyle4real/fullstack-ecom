import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../UI/Button/Button";

import {
    SDeleteIcon,
    SEditIcon,
    SIconButtonWrap,
    SIconsContainer,
    SImage,
    SMainMediaContainer,
    SMediaBottomBar,
    SMediaContainer,
    SMediaGrid,
    SProductDisplayGrid,
    STBodyTRVariant,
    STDImage,
    STDImageContainer,
} from "./styles";

import { missingImg } from "../../assets";
import { SCardContainer } from "../UI/Containers/styles";
import { SImageOverlay, SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SFormControl, SInput, SLabel, STextArea } from "../UI/AuthForm/styles";
import { STable, STBody, STD, STH, STHead, STHeadTR } from "../UI/Table/styles";
import { useMemo } from "react";
import ImageInput from "../UI/ImageInput/ImageInput";
import MediaFocus from "../UI/MediaFocus/MediaFocus";
import VariantMediaSelect from "../UI/VariantMediaSelect/VariantMediaSelect";

const AdminProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { product } = useSelector((state) => state.product);
    const [mediaSelect, setMediaSelect] = useState(null);
    const [variantSelect, setVariantSelect] = useState(null);

    const mediaSelectHandler = (mediaId) => setMediaSelect(mediaId);
    const variantSelectHandler = (variantId) => setVariantSelect(variantId);

    const { mainMedia, media } = useMemo(() => {
        if (!product.media.length) return { mainMedia: { url: missingImg, _id: null }, media: [] };
        if (product.media.length === 1) return { mainMedia: product.media[0], media: [] };
        else return { mainMedia: product.media[0], media: product.media.slice(1) };
    }, [product.media]);

    return (
        <>
            <>
                {!!variantSelect && (
                    <VariantMediaSelect
                        product={product}
                        variantSelect={variantSelect}
                        onCancel={() => variantSelectHandler(null)}
                    />
                )}
            </>
            <>
                {!!mediaSelect && (
                    <MediaFocus
                        product={product}
                        mediaSelect={mediaSelect}
                        onMediaSelect={mediaSelectHandler}
                    />
                )}
            </>
            {/* <>
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
            </> */}
            <SProductDisplayGrid>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Product Information</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            <SLabel>Title</SLabel>
                            <SInput />
                        </SFormControl>
                        <SFormControl>
                            <SLabel>Description</SLabel>
                            <STextArea />
                        </SFormControl>
                    </SCardContainer>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Media</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SMediaGrid>
                            <SMainMediaContainer>
                                <SImage src={mainMedia.url} />
                                <SImageOverlay onClick={() => mediaSelectHandler(mainMedia._id)} />
                            </SMainMediaContainer>
                            {media.map(({ url, _id }, index) => (
                                <SMediaContainer key={index}>
                                    <SImage src={url} />
                                    <SImageOverlay onClick={() => mediaSelectHandler(_id)} />
                                </SMediaContainer>
                            ))}
                        </SMediaGrid>
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
                                <ImageInput productId={id} />
                            </Button>
                        </SMediaBottomBar>
                    </SCardContainer>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Variants</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        {(() => {
                            const displayKeys = ["title", "price"];
                            const variants = product.variants;
                            return (
                                <STable>
                                    <STHead>
                                        <STHeadTR>
                                            <STH />
                                            <STH />
                                            <STH>Title</STH>
                                            <STH>Price</STH>
                                            <STH style={{ width: "1%", whiteSpace: "nowrap" }} />
                                        </STHeadTR>
                                    </STHead>
                                    <STBody>
                                        {variants.map((variant, index) => {
                                            const src = variant.mediaUrl || missingImg;
                                            return (
                                                <STBodyTRVariant key={index}>
                                                    <STD>{index + 1}</STD>
                                                    <STDImage>
                                                        <STDImageContainer>
                                                            <SImage src={src} />
                                                            <SImageOverlay
                                                                onClick={() =>
                                                                    variantSelectHandler(
                                                                        variant._id
                                                                    )
                                                                }
                                                            />
                                                        </STDImageContainer>
                                                    </STDImage>
                                                    {displayKeys.map((key, index) => {
                                                        let value = variant[key];
                                                        if (key === "price") value = `$${value}`;
                                                        return <STD key={index}>{value}</STD>;
                                                    })}
                                                    <STD>
                                                        <SIconsContainer>
                                                            <SIconButtonWrap>
                                                                <SEditIcon />
                                                            </SIconButtonWrap>
                                                            <SIconButtonWrap>
                                                                <SDeleteIcon />
                                                            </SIconButtonWrap>
                                                        </SIconsContainer>
                                                    </STD>
                                                </STBodyTRVariant>
                                            );
                                        })}
                                    </STBody>
                                </STable>
                            );
                        })()}
                    </SCardContainer>
                </div>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Product Status</SSectionHeadTitle>
                        </SSectionHeadContainer>
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
