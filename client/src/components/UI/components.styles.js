import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

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

export const SImageOverlay = styled.button`
    ${btnReset};
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0;
    background: ${({ theme }) => theme.bgOverlay};
    cursor: pointer;
    opacity: ${({ active }) => (!active ? 0 : 1)};

    :hover {
        opacity: 1;
        transition: 0.2s ease;
    }
`;
