import React from "react";
import { useSelector } from "react-redux";
import { SBreadTrail, STrailLink, STrailSpan } from "./styles";

const BreadTrail = () => {
    const { currentProduct } = useSelector((state) => state.product);

    return (
        <SBreadTrail>
            <STrailLink to="/">Home</STrailLink>
            <STrailSpan dash>&nbsp;/&nbsp;</STrailSpan>
            <STrailSpan>{currentProduct?.title}</STrailSpan>
        </SBreadTrail>
    );
};

export default BreadTrail;
