import React from "react";
import { SFilledStar, SHalfFilledStar, SRating, SStar } from "./styles";

const Rating = () => {
    return (
        <SRating>
            <SFilledStar />
            <SFilledStar />
            <SFilledStar />
            <SHalfFilledStar />
            <SStar />
        </SRating>
    );
};

export default Rating;
