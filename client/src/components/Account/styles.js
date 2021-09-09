import styled from "styled-components";

import { v } from "./../../styles/variables";

export const SAccount = styled.div`
    display: flex;
    justify-content: center;
`;

export const SAccountButtonsContainer = styled.div`
    text-align: center;
    letter-spacing: 100%;
`;

export const SAccountButtons = styled.div``;

export const SButtonContainer = styled.div`
    :not(:last-child) {
        margin-bottom: ${v.mdSpacing};
    }
`;

export const STitle = styled.span`
    display: block;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 2.2px;
    margin-bottom: ${v.smSpacing};
`;

export const SDescription = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: ${v.mdSpacing};
`;
