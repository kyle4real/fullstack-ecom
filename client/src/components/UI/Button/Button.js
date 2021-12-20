import React from "react";
import { SButton } from "./styles";

const Button = ({ children, onClick, secondary, absolute, style, ...restOfProps }) => {
    return (
        <SButton
            style={style ? style : {}}
            onClick={onClick && onClick}
            secondary={secondary}
            absolute={absolute}
            {...restOfProps}
        >
            {children}
        </SButton>
    );
};

export default Button;
