import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SProductDisplayGrid } from "./styles";

import { SCardContainer } from "../UI/Containers/styles";
import { SSectionHeadContainer, SSectionHeadTitle } from "../UI/components.styles";
import { SFormControl, SInput, SLabel, STextArea } from "../UI/Form/styles";

import { useMemo } from "react";

import UnsavedChanges from "../UI/UnsavedChanges/UnsavedChanges";

import VariantsTable from "./VariantsTable/VariantsTable";
import {
    arraysEqual,
    collectionsChange,
    onProductEdit,
    onVariantEdit,
    prepareCollectionsEdits,
} from "./helpers";
import { updateProduct } from "../../app/actions/product-actions_admin";
import MediaGrid from "./MediaGrid/MediaGrid";
import DropdownSelect from "../UI/DropdownSelect/DropdownSelect";
import { useEffect } from "react";

// const priceFormatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
// });

const AdminProduct = () => {
    const dispatch = useDispatch();

    const { product, productLoading } = useSelector((state) => state.product);
    const { collectionsTitles } = useSelector((state) => state.collections);

    const [productFormEdits, setProductFormEdits] = useState(null);
    const [variantFormEdits, setVariantFormEdits] = useState(null);

    const initialProductCollections = useMemo(
        () => product.collections.reduce((r, v) => [...r, v.title], []),
        [product.collections]
    );
    const [collectionsArr, setCollectionsArr] = useState(initialProductCollections);
    useEffect(() => setCollectionsArr(initialProductCollections), [initialProductCollections]);

    const onCancelHandler = () => {
        setProductFormEdits(null);
        setVariantFormEdits(null);
        setCollectionsArr(initialProductCollections);
    };
    const onSaveHandler = () => {
        const collectionsEdits = !arraysEqual(initialProductCollections, collectionsArr);
        if (!variantFormEdits && !productFormEdits && !collectionsEdits) return;
        const productObj = productFormEdits ? { ...productFormEdits } : {};
        if (variantFormEdits) {
            var variants = Object.keys(variantFormEdits).reduce((r, v) => {
                return [...r, { _id: v, ...variantFormEdits[v] }];
            }, []);
            productObj.variants = variants;
        }
        if (collectionsEdits) {
            const collections = prepareCollectionsEdits(
                initialProductCollections,
                collectionsArr,
                collectionsTitles
            );
            productObj.collections = collections;
        }

        dispatch(
            updateProduct(product._id, productObj, () => {
                setProductFormEdits(null);
                setVariantFormEdits(null);
            })
        );
    };

    const productEditHandler = (e) => {
        setProductFormEdits((prevState) => onProductEdit(prevState, e, product));
    };
    const variantInputEditHandler = (e) => {
        setVariantFormEdits((prevState) => onVariantEdit(prevState, e, product));
    };
    const collectionsEditHandler = (option) => {
        setCollectionsArr((prevState) => collectionsChange(prevState, option));
    };

    // useEffect(() => {
    //     console.log(collectionsArr);
    // }, [collectionsArr]);

    const edits = useMemo(() => {
        var edits =
            !!variantFormEdits ||
            !!productFormEdits ||
            !arraysEqual(initialProductCollections, collectionsArr);
        return edits;
    }, [variantFormEdits, productFormEdits, collectionsArr, initialProductCollections]);
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
                                return (
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
                                const value = collectionsArr;
                                const options = collectionsTitles.reduce(
                                    (r, v) => [...r, v.title],
                                    []
                                );
                                const label = value.length ? value.join(", ") : "None Selected";
                                console.log("value", value);
                                return (
                                    <DropdownSelect
                                        noClear
                                        label={label}
                                        value={value}
                                        options={options}
                                        onChange={(option) => collectionsEditHandler(option)}
                                    />
                                );
                            })()}
                        </SFormControl>
                    </SCardContainer>
                </div>
            </SProductDisplayGrid>
        </>
    );
};

export default AdminProduct;
