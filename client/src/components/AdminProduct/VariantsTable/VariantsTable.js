import React, { useState } from "react";
import { useSelector } from "react-redux";
import { missingImg } from "../../../assets";
import AddVariant from "../../UI/AddVariant/AddVariant";
import { SAddButton } from "../../UI/Button/styles";
import {
    SImageOverlay,
    SSectionHeadContainer,
    SSectionHeadTitle,
} from "../../UI/components.styles";
import PriceInput from "../../UI/Form/PriceInput/PriceInput";

import { STable, STBody, STD, STH, STHead, STHeadTR } from "../../UI/Table/styles";
import VariantMediaSelect from "../../UI/VariantMediaSelect/VariantMediaSelect";
import {
    SDeleteIcon,
    SDollarSign,
    SIconButtonWrap,
    SIconsContainer,
    SImage,
    SPriceInput,
    SPriceInputContainer,
    STBodyTRVariant,
    STDImage,
    STDImageContainer,
} from "./styles";

const VariantsTable = ({ variantFormInput, onVariantInputChange }) => {
    const { product } = useSelector((state) => state.product);
    const [variantSelect, setVariantSelect] = useState(null);
    const [addVariant, setAddVariant] = useState(false);

    const variantSelectHandler = (variantId) => setVariantSelect(variantId);

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
                                        value = variantFormInput[variant._id][key];
                                        return (
                                            <STD key={index}>
                                                <PriceInput
                                                    value={value}
                                                    name={`${variant._id}-${key}`}
                                                    onChange={(e) => onVariantInputChange(e)}
                                                />
                                            </STD>
                                        );
                                    }
                                    return <STD key={index}>{value}</STD>;
                                })}
                                <STD>
                                    <SIconsContainer>
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
        </>
    );
};

export default VariantsTable;
