import styled from "styled-components";

import { v } from "./../../../styles/variables";

export const SProductTable = styled.div`
    display: flex;
    justify-content: center;
`;

export const STableContainer = styled.div`
    width: 100%;
`;

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const STableHead = styled.thead`
    background: ${({ theme }) => theme.bg3};
`;

export const STableHeadTR = styled.tr``;

export const STableHeadTH = styled.th``;

export const STableBody = styled.tbody``;

export const STableBodyTR = styled.tr`
    cursor: ${({ clickable }) => (clickable ? "pointer" : "initial")};
`;

export const STableBodyTD = styled.td`
    :first-of-type {
        width: 3rem;
    }
`;

export const SContentContainer = styled.div``;

export const SContentSpanHead = styled.span`
    display: block;
    padding: ${v.mdSpacing} ${v.mdSpacing};
    font-size: 16px;
    font-weight: 400;
    text-align: ${({ center }) => (center ? "center" : "left")};
`;
export const SContentSpan = styled.span`
    display: block;
    padding: ${v.mdSpacing} ${v.mdSpacing};
    font-size: 16px;
    font-weight: 400;
    background: ${({ theme }) => theme.bg3};
    text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const SContentImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SContentImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SVariantSpan = styled.span`
    display: block;
    padding: ${v.smSpacing} ${v.mdSpacing};
    font-size: 14px;
    font-weight: 200;
    text-align: ${({ center }) => (center ? "center" : "left")};
`;
