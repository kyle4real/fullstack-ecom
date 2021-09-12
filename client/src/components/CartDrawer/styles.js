import styled, { css } from "styled-components";

import { v, b } from "../../styles/variables";

import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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
`;
export const SCartHeadSection = styled.div`
    flex: 1;
    text-align: right;

    :first-child {
        display: none;
    }
    @media ${b.md} {
        :first-child {
            display: initial;
        }
    }
`;
export const SCartHeadSpan = styled.span`
    display: block;
    text-align: left;

    @media ${b.md} {
        text-align: center;
    }
`;
export const SCloseIcon = styled(AiOutlineClose)`
    display: inline-block;
    margin-right: ${v.smSpacing};
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
`;

export const SCartProductDisplay = styled.div`
    overflow-y: auto;
    height: calc(100% - ${v.mdSpacing} * 3);
`;
export const SCartProduct = styled.div`
    display: flex;
    padding: ${v.mdSpacing} 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaryLighter};
`;
export const SImageContainer = styled.div`
    max-width: 140px;
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
export const SQtySelection = styled.div`
    display: inline-block;
    position: relative;
    display: flex;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.primaryLighter};
`;

export const SQtySelectionSpan = styled.span`
    font-size: 14px;
    width: ${v.lgSpacing};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${v.smSpacing} 0;
    :not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.primaryLighter};
    }
    :not(:nth-child(2)) {
        cursor: pointer;
    }
    user-select: none;
`;

const iconStyle = css`
    display: inline-block;
    font-size: 14px;
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
