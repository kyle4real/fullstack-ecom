import React from "react";
import { SButton } from "./styles";

const Button = ({ children, onClick }) => {
    return <SButton onClick={onClick && onClick}>{children}</SButton>;
};

export default Button;
