import styled, { css } from "styled-components";

import { v, b } from "../../../styles/variables";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const SQtySelection = styled.div`
    display: inline-block;
    position: relative;
    display: flex;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.bg3};
    color: ${({ disabled }) => (!disabled ? "initial" : "red")};
    line-height: 100%;
    user-select: none;

    @media ${b.md} {
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

    border-right: 1px solid ${({ theme }) => theme.bg3};
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
        border-right: 1px solid ${({ theme }) => theme.bg3};
    }
    :hover {
        background: ${({ theme }) => theme.bg3};
        color: ${({ theme }) => theme.text};
    }
    :disabled {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.textFade};
        cursor: initial;
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
