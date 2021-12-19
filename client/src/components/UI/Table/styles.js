import styled from "styled-components";

import { v, b } from "../../../styles/variables";

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const STHead = styled.thead`
    position: sticky;
    top: ${v.headerHeight};
    z-index: 10;

    @media ${b.lg} {
        top: calc(${v.headerHeight} + ${v.headerTopHeight});
    }
`;

export const STHeadTR = styled.tr`
    background: ${({ theme }) => theme.bg};
    box-shadow: inset 0 -1px ${({ theme }) => theme.bg3};
`;

export const STH = styled.th`
    padding: ${v.smSpacing};
    text-align: left;
    display: ${({ desktop }) => (desktop ? "none" : "table-cell")};
    font-size: 14px;
    font-weight: 500;

    :first-of-type {
        width: 1%;

        white-space: nowrap;
    }

    @media ${b.md} {
        display: table-cell;
    }
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
    background: ${({ theme }) => theme.bg2};
    :nth-of-type(even) {
        background: ${({ theme }) => theme.bg};
    }
`;

export const STD = styled.td`
    padding: ${v.smSpacing};
    display: ${({ desktop }) => (desktop ? "none" : "table-cell")};

    :first-of-type {
        width: 1%;
        padding: 0 ${v.smSpacing};
        white-space: nowrap;
        text-align: center;
    }

    @media ${b.md} {
        display: table-cell;
    }
`;
