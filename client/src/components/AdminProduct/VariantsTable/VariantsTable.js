import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVariant } from "../../../app/actions/product-actions_admin";
import { missingImg } from "../../../assets";
import AddVariant from "../../UI/AddVariant/AddVariant";
import { SAddButton } from "../../UI/Button/styles";
import {
    SImageOverlay,
    SSectionHeadContainer,
    SSectionHeadTitle,
} from "../../UI/components.styles";
import PriceInput from "../../UI/Form/PriceInput/PriceInput";
import Loading from "../../UI/Loading/Loading";

import { STable, STBody, STD, STH, STHead, STHeadTR } from "../../UI/Table/styles";
import VariantMediaSelect from "../../UI/VariantMediaSelect/VariantMediaSelect";
import {
    SDeleteIcon,
    SIconButtonWrap,
    SIconsContainer,
    SImage,
    STBodyTRVariant,
    STDImage,
    STDImageContainer,
} from "./styles";

const VariantsTable = ({ variantFormEdits, onVariantInputEdit }) => {
    const dispatch = useDispatch();
    const { product, variantLoading } = useSelector((state) => state.product);
    const [variantSelect, setVariantSelect] = useState(null);
    const [addVariant, setAddVariant] = useState(false);

    const variantSelectHandler = (variantId) => setVariantSelect(variantId);

    const deleteVariantHandler = (variantId) => dispatch(deleteVariant(product._id, variantId));

    const displayKeys = ["title", "price", "compare_at_price"];
    const variants = product.variants;
    return (
        <>
            {!!variantSelect && (
                <VariantMediaSelect
                    product={product}
                    variantSelect={variantSelect}
                    onCancel={() => variantSelectHandler(null)}
                />
            )}
            {!!addVariant && <AddVariant product={product} onCancel={() => setAddVariant(false)} />}
            <SSectionHeadContainer>
                <SSectionHeadTitle>Variants</SSectionHeadTitle>
                <SAddButton onClick={() => setAddVariant(true)}>Add Variant</SAddButton>
            </SSectionHeadContainer>
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
                        const src = variant?.media?.url || missingImg;
                        const loading = variantLoading === variant._id;
                        return (
                            <STBodyTRVariant key={index}>
                                <STD>{index + 1}</STD>
                                <STDImage>
                                    <STDImageContainer>
                                        <SImage src={src} />
                                        <SImageOverlay
                                            onClick={() => variantSelectHandler(variant._id)}
                                        />
                                    </STDImageContainer>
                                </STDImage>
                                {displayKeys.map((key, index) => {
                                    let value = variant[key];
                                    if (key === "price" || key === "compare_at_price") {
                                        value = variantFormEdits?.[variant._id]?.[key] || value;
                                        return (
                                            <STD key={index}>
                                                <PriceInput
                                                    value={value}
                                                    name={`${variant._id}-${key}`}
                                                    onChange={(e) => onVariantInputEdit(e)}
                                                />
                                            </STD>
                                        );
                                    }
                                    return <STD key={index}>{value}</STD>;
                                })}
                                <STD>
                                    <SIconsContainer>
                                        <SIconButtonWrap
                                            onClick={() => deleteVariantHandler(variant._id)}
                                        >
                                            {!loading ? <SDeleteIcon /> : <Loading />}
                                        </SIconButtonWrap>
                                    </SIconsContainer>
                                </STD>
                            </STBodyTRVariant>
                        );
                    })}
                </STBody>
            </STable>
        </>
    );
};

export default VariantsTable;
