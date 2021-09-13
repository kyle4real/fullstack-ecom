import styled, { css } from "styled-components";

import { v } from "../../../styles/variables";

import { Link } from "react-router-dom";

export const SBreadTrail = styled.div`
    display: flex;
    padding-bottom: ${v.lgSpacing};
    margin: 0 auto;
    line-height: 100%;
    width: 100%;
`;

const trailStyles = css`
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.primaryLight};
    font-weight: 400;
`;

export const STrailSpan = styled.span`
    ${trailStyles}
    font-size: ${({ dash }) => (!dash ? "16px" : "20px")}
`;

export const STrailLink = styled(Link)`
    ${trailStyles}
    text-decoration: none;
`;
