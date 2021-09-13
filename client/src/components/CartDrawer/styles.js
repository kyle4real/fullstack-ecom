import styled, { css } from "styled-components";

import { v, b } from "../../styles/variables";

import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// CART WRAP ////////////////////////////////
export const SCartWrap = styled.div`
    .cart-open {
        right: 0;
    }
`;
// CART CONTAINER (FIXED) ///////////////////////////////
export const SCartDrawerContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    background: white;
    transition: 0.2s ease-in right;
    z-index: 10000;
    box-shadow: ${v.cardBoxShadow};

    width: 75%;
    right: -100%;
    @media ${b.sm} {
        width: 60%;
        right: -100%;
    }
    @media ${b.md} {
        width: 27.5rem;
        right: -27.5rem;
    }
`;

export const SCartDrawer = styled.div`
    padding: ${v.mdSpacing};
    padding-right: 0;
    line-height: 100%;
    height: 100%;
`;

export const SCartHead = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: ${v.mdSpacing};
    position: relative;
`;

export const SCartHeadSpan = styled.span`
    display: block;
    width: 100%;
    text-align: left;
    @media ${b.md} {
        text-align: center;
    }
`;
export const SCloseIcon = styled(AiOutlineClose)`
    position: absolute;
    right: ${v.smSpacing};
    display: inline-block;
    margin-right: ${v.smSpacing};
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
`;

// PRODUCT DISPLAY ////////////////////////////////////////////

export const SCartProductDisplay = styled.div`
    overflow-y: auto;
    max-height: calc(100% - 200px);
`;
export const SCartProduct = styled.div`
    display: flex;
    padding: ${v.mdSpacing} 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaryLighter};
`;
export const SImageContainer = styled.div`
    max-width: 100px;
    @media ${b.md} {
        max-width: 140px;
    }
`;
export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SProductContent = styled.div`
    margin-left: ${v.mdSpacing};
`;
export const SProductTitle = styled.span`
    display: block;
    font-size: 18px;
    margin-bottom: ${v.smSpacing};
`;
export const SProductVariant = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: ${v.smSpacing};
    color: ${({ theme }) => theme.primaryLight};
`;
export const SProductPrice = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: ${v.mdSpacing};
    color: ${({ theme }) => theme.primaryLight};
`;

// QTY SELECTION ///////////////////////////////////////

export const SQtySelection = styled.div`
    display: inline-block;
    position: relative;
    display: flex;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.primaryLighter};
    color: ${({ disabled }) => (!disabled ? "initial" : "red")};

    user-select: none;
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

export const SQtySelectionPopup = styled.div`
    position: absolute;
`;

export const SRemoveButton = styled.span`
    margin-top: ${v.smSpacing};
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryLight};
    cursor: pointer;
`;

// CART TOTAL //////////////////////////////////////////////

export const SCartTotal = styled.div`
    margin-top: ${v.lgSpacing};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: ${v.mdSpacing};
    padding-right: ${v.mdSpacing};
    border-bottom: 1px solid ${({ theme }) => theme.primaryLighter};
    margin-bottom: ${v.lgSpacing};
`;

export const SCartTotalLabel = styled.span`
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
`;
export const SCartTotalPrice = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 600;
`;

// EMPTY NOTIFICATION ///////////////////////////////////////
export const SCartEmptyNotification = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 600;
    padding: ${v.lgSpacing} 0;
    text-align: center;
`;

// CART BUTTONS //////////////////////////////////////////////

export const SCartButtons = styled.div`
    margin-top: ${v.mdSpacing};
    margin-right: ${v.mdSpacing};
`;
export const SButtonControl = styled.div`
    margin-bottom: ${v.smSpacing};
`;
