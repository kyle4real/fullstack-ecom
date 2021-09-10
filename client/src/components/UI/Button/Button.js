import React from "react";
import { SButton } from "./styles";

const Button = ({
    children,
    onClick,
    secondary,
    fixed,
    secondaryRadius,
    absolute,
    ...restOfProps
}) => {
    return (
        <SButton
            onClick={onClick && onClick}
            secondary={secondary}
            fixed={fixed}
            secondaryRadius={secondaryRadius}
            absolute={absolute}
            {...restOfProps}
        >
            {children}
        </SButton>
    );
};

export default Button;
