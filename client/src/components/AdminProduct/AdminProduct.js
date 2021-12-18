import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SProductDisplayGrid } from "./styles";

import { SCardContainer } from "../UI/Containers/styles";
import { SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SFormControl, SInput, SLabel, SSelect, SSelectOption, STextArea } from "../UI/Form/styles";

import { useMemo } from "react";

import UnsavedChanges from "../UI/UnsavedChanges/UnsavedChanges";

import VariantsTable from "./VariantsTable/VariantsTable";
import { onProductEdit, onVariantEdit } from "./helpers";
import { updateProduct } from "../../app/actions/product-actions_admin";
import MediaGrid from "./MediaGrid/MediaGrid";
import DropdownSelect from "../UI/DropdownSelect/DropdownSelect";

const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});

const AdminProduct = () => {
    const dispatch = useDispatch();

    const { product, productLoading } = useSelector((state) => state.product);

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

    const loading = productLoading;
    return (
        <>
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
                        {(() => {
                            return <MediaGrid />;
                        })()}
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
                            <SSectionHeadTitle>Status</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            {(() => {
                                const value = productFormEdits?.["status"] || product["status"];
                                console.log(value);
                                return (
                                    // <SSelect
                                    //     name="status"
                                    //     value={value}
                                    //     onChange={(e) => productEditHandler(e)}
                                    // >
                                    //     {["active", "archived"].map((option, index) => (
                                    //         <SSelectOption key={index}>{option}</SSelectOption>
                                    //     ))}
                                    // </SSelect>
                                    <DropdownSelect
                                        noClear
                                        label={value}
                                        value={value}
                                        options={["active", "archived"]}
                                        onChange={(option) =>
                                            productEditHandler({
                                                target: { name: "status", value: option },
                                            })
                                        }
                                    />
                                );
                            })()}
                        </SFormControl>
                    </SCardContainer>
                    <SCardContainer>
                        <SSectionHeadContainer>
                            <SSectionHeadTitle>Organization</SSectionHeadTitle>
                        </SSectionHeadContainer>
                        <SFormControl>
                            <SLabel>Collections</SLabel>
                            {(() => {
                                const value = productFormEdits?.["status"] || product["status"];
                                return <DropdownSelect noClear />;
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
