import React from "react";
import useCartActions from "../../../hooks/useCartActions";
import {
    SMinusIcon,
    SPlusIcon,
    SQtySelection,
    SQtySelectionButton,
    SQtySelectionSpan,
    SRemoveButton,
} from "./styles";

const QuantitySelection = ({ cartItem, mobile }) => {
    const { decHandler, incHandler, removeHandler } = useCartActions();
    const { _id, qty } = cartItem;
    return (
        <>
            <SQtySelection mobile={mobile}>
                <SQtySelectionButton disabled={qty === 1} onClick={() => decHandler(_id)}>
                    <SMinusIcon />
                </SQtySelectionButton>
                <SQtySelectionSpan>{qty}</SQtySelectionSpan>
                <SQtySelectionButton onClick={() => incHandler(_id)}>
                    <SPlusIcon />
                </SQtySelectionButton>
            </SQtySelection>
            <SRemoveButton mobile={mobile} onClick={() => removeHandler(_id)}>
                Remove
            </SRemoveButton>
        </>
    );
};

export default QuantitySelection;
