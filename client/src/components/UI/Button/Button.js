import React from "react";
import { SButton } from "./styles";

const Button = ({ children, onClick, secondary, fixed, radius }) => {
    return (
        <SButton onClick={onClick && onClick} secondary={secondary} fixed={fixed} radius={radius}>
            {children}
        </SButton>
    );
};

export default Button;
