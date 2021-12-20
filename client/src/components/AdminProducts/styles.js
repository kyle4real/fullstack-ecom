import styled from "styled-components";

import { v } from "../../styles/variables";

import { STD } from "../UI/Table/styles";

export const STBodyTRVariant = styled.tr`
    background: transparent;
`;

export const STDVariant = styled(STD)`
    font-size: 14px;
    :nth-of-type(3) {
        padding: calc(${v.smSpacing} / 2) ${v.mdSpacing};
    }
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
`;

export const STDImage = styled.td`
    width: 1%;
`;

export const SImageContainer = styled.div`
    width: 64px;
    display: flex;
    margin: ${v.smSpacing};
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;
