import { Link } from "react-router-dom";
import styled from "styled-components";

import { v, b } from "../../styles/variables";

export const SCartPage = styled.div``;

export const SCartPageTitle = styled.span`
    display: block;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: ${v.lgSpacing};
`;

// TABLE ///////////////////////////////////////

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const STableHead = styled.thead`
    background: ${({ theme }) => theme.bg3};
`;

export const STableHeadTR = styled.tr``;

export const STableHeadTH = styled.th`
    font-weight: normal;
    :first-child {
        text-align: left;
    }
    padding: ${v.mdSpacing};

    :nth-child(2),
    :nth-child(3) {
        display: none;
        @media ${b.md} {
            display: table-cell;
        }
    }
`;

export const STableBody = styled.tbody``;

export const STableBodyTR = styled.tr`
    border: 1px solid ${({ theme }) => theme.bg3};
`;

export const STableBodyTD = styled.td`
    padding: ${v.mdSpacing};
    :nth-child(1) {
        width: 130px;
    }
    :nth-child(2) {
        width: auto;
    }
    :nth-child(3) {
        padding: ${v.mdSpacing} ${v.lgSpacing};
        width: calc(${v.lgSpacing} * 3 + ${v.mdSpacing} * 4);
        text-align: center;
        border-left: 1px solid ${({ theme }) => theme.bg3};
    }
    :nth-child(4) {
        width: calc(${v.lgSpacing} * 3 + ${v.mdSpacing} * 4);
        text-align: center;
        font-size: 14px;
        border-left: 1px solid ${({ theme }) => theme.bg3};
    }

    :nth-child(3),
    :nth-child(4) {
        display: none;
        @media ${b.md} {
            display: table-cell;
        }
    }
`;

export const SImageContainer = styled(Link)`
    text-decoration: none;
    display: block;
    width: inherit;
`;
export const SImage = styled.img`
    max-width: 100%;
    height: 100%;
`;

export const SProductTitle = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: ${v.smSpacing};
`;
export const SProductVariant = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: ${v.smSpacing};
`;
export const SProductPrice = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: ${v.smSpacing};
    @media ${b.md} {
        margin-bottom: 0;
    }
`;
