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
    const { subHandler, addHandler, removeHandler } = useCartActions();
    const { _id, qty } = cartItem;
    return (
        <>
            <SQtySelection mobile={mobile}>
                <SQtySelectionButton disabled={qty === 1} onClick={() => subHandler(_id)}>
                    <SMinusIcon />
                </SQtySelectionButton>
                <SQtySelectionSpan>{qty}</SQtySelectionSpan>
                <SQtySelectionButton onClick={() => addHandler(_id)}>
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
