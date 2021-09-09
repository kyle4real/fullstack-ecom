import React from "react";
import { SButton } from "./styles";

const Button = ({ children, onClick, secondary }) => {
    return (
        <SButton onClick={onClick && onClick} secondary={secondary}>
            {children}
        </SButton>
    );
};

export default Button;
