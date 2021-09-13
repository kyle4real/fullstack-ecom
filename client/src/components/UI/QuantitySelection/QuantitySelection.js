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

const QuantitySelection = ({ cartProduct, mobile }) => {
    const { subHandler, addHandler, removeHandler } = useCartActions();
    const { productObj, variantSelection, qty } = cartProduct;
    return (
        <>
            <SQtySelection mobile={mobile}>
                <SQtySelectionButton
                    disabled={qty === 1}
                    onClick={() => subHandler(productObj, variantSelection)}
                >
                    <SMinusIcon />
                </SQtySelectionButton>
                <SQtySelectionSpan>{qty}</SQtySelectionSpan>
                <SQtySelectionButton onClick={() => addHandler(productObj, variantSelection)}>
                    <SPlusIcon />
                </SQtySelectionButton>
            </SQtySelection>
            <SRemoveButton
                mobile={mobile}
                onClick={() => removeHandler(productObj, variantSelection)}
            >
                Remove
            </SRemoveButton>
        </>
    );
};

export default QuantitySelection;
