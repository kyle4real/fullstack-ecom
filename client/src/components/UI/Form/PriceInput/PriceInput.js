import React from "react";
import { SDollarSign, SPriceInput, SPriceInputContainer } from "./styles";

// const priceFormatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
// });

const PriceInput = ({ value, name, onChange, placeholder }) => {
    const onChangeHandler = (e) => {
        const value = e.target.value;
        if (isNaN(Number(value))) return;
        onChange(e);
    };
    // const onBlurHandler = (e) => {
    //     e.target.value = priceFormatter.format(e.target.value).slice(1);
    //     onChange(e);
    // };

    return (
        <SPriceInputContainer>
            <SPriceInput
                value={value}
                name={name}
                onChange={(e) => onChangeHandler(e)}
                placeholder={placeholder ? placeholder : !value ? "0.00" : "false"}
                // onBlur={(e) => onBlurHandler(e)}
            />
            <SDollarSign>$</SDollarSign>
        </SPriceInputContainer>
    );
};

export default PriceInput;
