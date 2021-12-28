import styled from "styled-components";

import { v, b } from "../../styles/variables";

import { AiOutlineClose } from "react-icons/ai";

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
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
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
    color: ${({ theme }) => theme.text2};
`;
export const SProductPrice = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: ${v.mdSpacing};
    color: ${({ theme }) => theme.text};
`;

// CART TOTAL //////////////////////////////////////////////

export const SCartTotal = styled.div`
    margin-top: ${v.lgSpacing};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: ${v.mdSpacing};
    padding-right: ${v.mdSpacing};
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
    margin-bottom: ${v.lgSpacing};
`;

export const SCartTotalLabel = styled.span`
    display: block;
    font-size: 18px;
`;
export const SCartTotalPrice = styled.span`
    display: block;
    font-size: 18px;
`;

// CART BUTTONS //////////////////////////////////////////////

export const SCartButtons = styled.div`
    margin-top: ${v.mdSpacing};
    margin-right: ${v.mdSpacing};
`;
export const SButtonControl = styled.div`
    margin-bottom: ${v.smSpacing};
`;
