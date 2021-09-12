import styled, { css } from "styled-components";

import { v } from "../../../styles/variables";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export const SRating = styled.div`
    display: flex;
    align-items: center;
`;

const iconStyle = css`
    display: block;
    font-size: 18px;
    :not(:last-child) {
        margin-right: ${v.smSpacing};
    }
`;
export const SStar = styled(BsStar)`
    ${iconStyle}
`;
export const SFilledStar = styled(BsStarFill)`
    ${iconStyle}
`;
export const SHalfFilledStar = styled(BsStarHalf)`
    ${iconStyle}
`;
