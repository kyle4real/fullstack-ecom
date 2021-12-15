import React from "react";
import { SDollarSign, SPriceInput, SPriceInputContainer } from "./styles";

const PriceInput = ({ value, name, onChange, placeholder }) => {
    const onChangeHandler = (e) => {
        const value = e.target.value;
        if (isNaN(Number(value))) return;
        onChange(e);
    };

    return (
        <SPriceInputContainer>
            <SPriceInput
                value={value}
                name={name}
                onChange={(e) => onChangeHandler(e)}
                placeholder={placeholder}
            />
            <SDollarSign>$</SDollarSign>
        </SPriceInputContainer>
    );
};

export default PriceInput;
