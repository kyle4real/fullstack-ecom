import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../UI/Button/Button";

import {
    SDeleteIcon,
    SDollarSign,
    SEditIcon,
    SIconButtonWrap,
    SIconsContainer,
    SImage,
    SMainMediaContainer,
    SMediaBottomBar,
    SMediaContainer,
    SMediaGrid,
    SPriceInput,
    SPriceInputContainer,
    SProductDisplayGrid,
    STBodyTRVariant,
    STDImage,
    STDImageContainer,
} from "./styles";

import { missingImg } from "../../assets";
import { SCardContainer } from "../UI/Containers/styles";
import { SImageOverlay, SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import {
    SFormControl,
    SInput,
    SLabel,
    SSelect,
    SSelectOption,
    STextArea,
} from "../UI/AuthForm/styles";
import { STable, STBody, STD, STH, STHead, STHeadTR } from "../UI/Table/styles";
import { useMemo } from "react";
import ImageInput from "../UI/ImageInput/ImageInput";
import MediaFocus from "../UI/MediaFocus/MediaFocus";
import VariantMediaSelect from "../UI/VariantMediaSelect/VariantMediaSelect";
import UnsavedChanges from "../UI/UnsavedChanges/UnsavedChanges";

const editTargets = ["title", "description", "status"];

const prepareInitialFormInput = (product) => {
    return editTargets.reduce((r, v) => {
        const value = product[v] || "";
        return { ...r, [v]: value };
    }, {});
};

const variantEditTargets = ["price", "compare_at_price"];

const prepareInitialVariantFormInput = (variants) => {
    return variants.reduce((r, v) => {
        let variant = v;
        variant = variantEditTargets.reduce((r, v) => ({ ...r, [v]: variant[v] }), {});
        return { ...r, [v._id]: variant };
    }, {});
};

const AdminProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { product } = useSelector((state) => state.product);
    const [mediaSelect, setMediaSelect] = useState(null);
    const [variantSelect, setVariantSelect] = useState(null);

    const initialFormInput = useMemo(() => prepareInitialFormInput(product), [product]);
    const [formInput, setFormInput] = useState(initialFormInput);

    const initialVariantFormInput = useMemo(
        () => prepareInitialVariantFormInput(product.variants),
        [product.variants]
    );
    const [variantFormInput, setVariantFormInput] = useState(initialVariantFormInput);

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormInput((p) => ({ ...p, [name]: value }));
    };
    const variantInputChangeHandler = (e) => {
        const [id, name] = e.target.name.split("-");
        const value = e.target.value;
        setVariantFormInput((p) => ({ ...p, [id]: { ...p[id], [name]: parseInt(value) } }));
    };

    const edits = useMemo(() => {
        let changes = false;
        editTargets.forEach((name) => {
            if (initialFormInput[name] !== formInput[name]) changes = true;
        });

        product.variants.forEach(({ _id }) => {
            variantEditTargets.forEach((name) => {
                if (initialVariantFormInput[_id][name] !== variantFormInput[_id][name])
                    changes = true;
            });
        });
        return changes;
    }, [formInput, initialFormInput, product.variants, initialVariantFormInput, variantFormInput]);

    const mediaSelectHandler = (mediaId) => setMediaSelect(mediaId);
    const variantSelectHandler = (variantId) => setVariantSelect(variantId);

    const { mainMedia, media } = useMemo(() => {
        let media = product.media;
        if (!media.length) return { mainMedia: { url: missingImg, _id: null }, media: [] };
        media = [...media].sort((a, b) => a.position - b.position);
        if (media.length === 1) return { mainMedia: media[0], media: [] };
        else return { mainMedia: media[0], media: media.slice(1) };
    }, [product.media]);

    return (
        <>
            {!!variantSelect && (
                <VariantMediaSelect
                    product={product}
                    variantSelect={variantSelect}
                    onCancel={() => variantSelectHandler(null)}
                />
            )}

            {!!mediaSelect && (
                <MediaFocus
                    product={product}
                    mediaSelect={mediaSelect}
                    onMediaSelect={mediaSelectHandler}
                />
            )}

            <UnsavedChanges show={edits} loading={false} />

            <SProductDisplayGrid>
                <div>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Product Information</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            <SLabel>Title</SLabel>
                            <SInput
                                name="title"
                                value={formInput["title"]}
                                onChange={(e) => inputChangeHandler(e)}
                            />
                        </SFormControl>
                        <SFormControl>
                            <SLabel>Description</SLabel>
                            <STextArea
                                name="description"
                                value={formInput["description"]}
                                onChange={(e) => inputChangeHandler(e)}
                            />
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
                            <Button secondaryRadius fixed absolute>
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
                            const displayKeys = ["title", "price", "compare_at_price"];
                            const variants = product.variants;
                            return (
                                <STable>
                                    <STHead>
                                        <STHeadTR>
                                            <STH />
                                            <STH />
                                            <STH>Title</STH>
                                            <STH>Price</STH>
                                            <STH>Compare Price</STH>
                                            <STH style={{ width: "1%", whiteSpace: "nowrap" }} />
                                        </STHeadTR>
                                    </STHead>
                                    <STBody>
                                        {variants.map((variant, index) => {
                                            const src = variant.media.url || missingImg;
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
                                                        if (
                                                            key === "price" ||
                                                            key === "compare_at_price"
                                                        ) {
                                                            value =
                                                                variantFormInput[variant._id][key];
                                                            return (
                                                                <STD key={index}>
                                                                    <SPriceInputContainer>
                                                                        <SPriceInput
                                                                            value={value}
                                                                            name={`${variant._id}-${key}`}
                                                                            onChange={(e) =>
                                                                                variantInputChangeHandler(
                                                                                    e
                                                                                )
                                                                            }
                                                                        />
                                                                        <SDollarSign>$</SDollarSign>
                                                                    </SPriceInputContainer>
                                                                </STD>
                                                            );
                                                        }
                                                        return <STD key={index}>{value}</STD>;
                                                    })}
                                                    <STD>
                                                        <SIconsContainer>
                                                            {/* <SIconButtonWrap>
                                                                <SEditIcon />
                                                            </SIconButtonWrap> */}
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
                        <SFormControl>
                            <SSelect
                                name="status"
                                value={formInput["status"]}
                                onChange={(e) => inputChangeHandler(e)}
                            >
                                {["active", "archived"].map((option, index) => (
                                    <SSelectOption key={index}>{option}</SSelectOption>
                                ))}
                            </SSelect>
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
