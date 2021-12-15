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
import { updateProduct } from "../../app/actions/product-actions_admin";
import Loading from "../UI/Loading/Loading";
import { SAddButton } from "../UI/Button/styles";
import VariantsTable from "./VariantsTable/VariantsTable";

const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});

const editTargets = ["title", "description", "status"];

const prepareInitialFormInput = (product) => {
    return editTargets.reduce((r, v) => {
        const value = product?.[v] || "";
        return { ...r, [v]: value };
    }, {});
};

const variantEditTargets = ["price", "compare_at_price"];

const prepareInitialVariantFormInput = (variants) => {
    return variants.reduce((r, v) => {
        let variant = v;
        variant = variantEditTargets.reduce(
            (r, v) => ({ ...r, [v]: priceFormatter.format(variant?.[v]).slice(1) }),
            {}
        );
        return { ...r, [v._id]: variant };
    }, {});
};

const AdminProduct = () => {
    const dispatch = useDispatch();

    const { product, productLoading, mediaLoading } = useSelector((state) => state.product);
    const [mediaSelect, setMediaSelect] = useState(null);

    const initialFormInput = useMemo(() => prepareInitialFormInput(product), [product]);
    const [formInput, setFormInput] = useState(initialFormInput);
    useEffect(() => setFormInput(initialFormInput), [initialFormInput]);

    const initialVariantFormInput = useMemo(
        () => prepareInitialVariantFormInput(product.variants),
        [product.variants]
    );
    const [variantFormInput, setVariantFormInput] = useState(initialVariantFormInput);
    useEffect(() => setVariantFormInput(initialVariantFormInput), [initialVariantFormInput]);

    const onCancelHandler = () => {
        setFormInput(initialFormInput);
        setVariantFormInput(initialVariantFormInput);
    };
    const onSaveHandler = () => {
        const productEdits = {};
        editTargets.forEach((name) => {
            if (initialFormInput[name] !== formInput[name]) productEdits[name] = formInput[name];
        });

        const variantsEdits = [];
        product.variants.forEach(({ _id }) => {
            const obj = {};
            variantEditTargets.forEach((name) => {
                const initial = priceFormatter.format(Number(initialVariantFormInput[_id][name]));
                const formInput = priceFormatter.format(Number(variantFormInput[_id][name]));
                if (initial !== formInput) obj[name] = Number(formInput.slice(1));
            });
            if (Object.keys(obj).length) variantsEdits.push({ _id, ...obj });
        });

        if (!Object.keys(productEdits).length && !variantsEdits.length) return;

        const productObj = { ...productEdits };
        if (variantsEdits.length) productObj.variants = variantsEdits;
        dispatch(updateProduct(product._id, productObj));
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormInput((p) => ({ ...p, [name]: value }));
    };
    const variantInputChangeHandler = (e) => {
        const value = e.target.value;
        // if (isNaN(Number(value))) return;
        const [id, name] = e.target.name.split("-");
        setVariantFormInput((p) => ({ ...p, [id]: { ...p[id], [name]: value } }));
    };

    const edits = useMemo(() => {
        let changes = false;
        editTargets.forEach((name) => {
            if (initialFormInput[name] !== formInput[name]) changes = true;
        });

        product.variants.forEach(({ _id }) => {
            variantEditTargets.forEach((name) => {
                const initial = priceFormatter.format(Number(initialVariantFormInput[_id][name]));
                const formInput = priceFormatter.format(Number(variantFormInput[_id][name]));
                if (initial !== formInput) changes = true;
            });
        });
        return changes;
    }, [formInput, initialFormInput, product.variants, initialVariantFormInput, variantFormInput]);

    const mediaSelectHandler = (mediaId) => setMediaSelect(mediaId);

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
            {!!mediaSelect && (
                <MediaFocus
                    product={product}
                    media={[mainMedia, ...media]}
                    mediaSelect={mediaSelect}
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
                                    onVariantInputChange={variantInputChangeHandler}
                                    variantFormInput={variantFormInput}
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
