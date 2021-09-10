import React from "react";
import { SButton } from "./styles";

const Button = ({ children, onClick, secondary, fixed, radius, ...restOfProps }) => {
    return (
        <SButton
            onClick={onClick && onClick}
            secondary={secondary}
            fixed={fixed}
            radius={radius}
            {...restOfProps}
        >
            {children}
        </SButton>
    );
};

export default Button;
