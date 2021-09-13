import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { v, b } from "../../styles/variables";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const SCartPage = styled.div``;

export const SCartPageTitle = styled.span`
    display: block;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: ${v.lgSpacing};
`;

// CART EMPTY //////////////////////////////////

export const SCartEmptyNotification = styled.span`
    display: block;
    text-align: center;
    font-size: 14px;
`;
export const SContinueShoppingContainer = styled.div`
    text-align: center;
`;
export const SContinueShopping = styled.span`
    display: inline-block;
    font-size: 14px;
`;
export const SContinueShoppingLink = styled(Link)`
    display: inline-block;
    font-size: 14px;
    color: inherit;
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
`;

// QTY SELECTION /////////////////////////////////////
export const SQtySelection = styled.div`
    display: inline-block;
    position: relative;
    display: flex;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.primaryLighter};
    color: ${({ disabled }) => (!disabled ? "initial" : "red")};
    line-height: 100%;
    user-select: none;
    margin-top: ${v.smSpacing};

    @media ${b.md} {
        margin: 0 ${v.mdSpacing};
        display: ${({ mobile }) => (mobile ? "none" : "inlineblock")};
    }
`;

export const SQtySelectionSpan = styled.span`
    color: inherit;
    font-size: 14px;
    width: ${v.lgSpacing};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${v.smSpacing} 0;

    border-right: 1px solid ${({ theme }) => theme.primaryLighter};
`;

export const SQtySelectionButton = styled.button`
    background: ${({ theme }) => theme.bg2};
    border: none;
    outline: none;
    color: inherit;
    font-size: 14px;
    width: ${v.lgSpacing};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${v.smSpacing} 0;
    :not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.primaryLighter};
    }
    :hover {
        background: ${({ theme }) => theme.overlay};
        color: ${({ theme }) => theme.text};
    }
    :disabled {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.primaryLighter};
        :hover {
            background: none;
        }
    }
    cursor: pointer;
`;

const iconStyle = css`
    display: inline-block;
    font-size: 16px;
`;
export const SMinusIcon = styled(AiOutlineMinus)`
    ${iconStyle}
`;
export const SPlusIcon = styled(AiOutlinePlus)`
    ${iconStyle}
`;

export const SRemoveButton = styled.span`
    margin-top: ${v.smSpacing};
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryLight};
    cursor: pointer;

    @media ${b.md} {
        display: ${({ mobile }) => (mobile ? "none" : "inlineblock")};
    }
`;
