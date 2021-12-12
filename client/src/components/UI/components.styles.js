import styled from "styled-components";

import { v } from "../../styles/variables";

export const SSectionHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid ${({ theme }) => theme.bg};
    padding-bottom: calc(${v.smSpacing} / 2);
    margin-bottom: ${v.mdSpacing};
`;

export const SSectionHeadTitle = styled.h2`
    display: block;
    font-size: 18px;
    font-weight: 600;
    /* padding: ${v.smSpacing}; */
`;
