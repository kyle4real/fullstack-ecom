import React, { useRef } from "react";
import useDetectClickaway from "../../../hooks/useClickAway";
import { s } from "../../../styles/variables";
import { SSectionHeadContainer, SSectionHeadTitle } from "../components.styles";
import { SCardContainer, SFixedContainer } from "../Containers/styles";
import Form from "../Form/Form";
import Overlay from "../Overlay/Overlay";

const AddVariant = ({ product, onCancel }) => {
    const addVariantRef = useRef();
    useDetectClickaway(addVariantRef, () => {
        onCancel();
    });

    return (
        <Overlay>
            <SFixedContainer maxWidth={300}>
                <SCardContainer ref={addVariantRef}>
                    <SSectionHeadContainer>
                        <SSectionHeadTitle>{`Add Variant - ${product.title}`}</SSectionHeadTitle>
                    </SSectionHeadContainer>
                    <Form formArr={formArr} submitBtn={"Add Variant"} />
                </SCardContainer>
            </SFixedContainer>
        </Overlay>
    );
};

const formArr = [
    {
        label: "Title",
        name: "title",
        type: "text",
    },
    {
        label: "Price",
        name: "price",
        type: "number",
    },
    {
        label: "Compare At Price",
        name: "compare_at_price",
        type: "number",
    },
];

export default AddVariant;
