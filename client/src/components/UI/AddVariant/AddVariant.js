import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAndReplaceVariant, addVariant } from "../../../app/actions/product-actions_admin";
import useDetectClickaway from "../../../hooks/useClickAway";
import { SSectionHeadContainer, SSectionHeadTitle } from "../components.styles";
import { SCardContainer, SFixedContainer } from "../Containers/styles";
import Form from "../Form/Form";
import Overlay from "../Overlay/Overlay";

const AddVariant = ({ product, onCancel, hasVariants }) => {
    const dispatch = useDispatch();
    const { variantLoading } = useSelector((state) => state.product);
    const addVariantRef = useRef();
    useDetectClickaway(addVariantRef, () => {
        onCancel();
    });

    const onSubmitHandler = (form) => {
        if (hasVariants) {
            dispatch(
                addVariant(product._id, form, () => {
                    onCancel();
                })
            );
        } else if (!hasVariants) {
            dispatch(
                addAndReplaceVariant(product._id, form, () => {
                    onCancel();
                })
            );
        }
    };

    return (
        <Overlay>
            <SFixedContainer maxWidth={300}>
                <SCardContainer ref={addVariantRef}>
                    <SSectionHeadContainer>
                        <SSectionHeadTitle>{`Add Variant - ${product.title}`}</SSectionHeadTitle>
                    </SSectionHeadContainer>
                    <Form
                        formArr={formArr}
                        submitBtn={"Add Variant"}
                        onSubmit={onSubmitHandler}
                        loading={variantLoading}
                    />
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
        type: "price",
    },
    {
        label: "Compare At Price",
        name: "compare_at_price",
        type: "price",
    },
];

export default AddVariant;
