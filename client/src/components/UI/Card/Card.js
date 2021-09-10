import React from "react";
import { SCard } from "./styles";

const Card = ({ children, bg, size }) => {
    return (
        <SCard bg={bg} size={size}>
            {children}
        </SCard>
    );
};

export default Card;
