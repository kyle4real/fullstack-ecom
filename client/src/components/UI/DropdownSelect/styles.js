import styled from "styled-components";

import { v, btnReset } from "../../../styles/variables";

import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

export const SDropdownContainer = styled.div`
    position: relative;
    user-select: none;
    display: block;
`;

export const SSelectedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: ${v.smSpacing} ${v.smSpacing};
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    padding: calc(${v.smSpacing} + 4px) calc(${v.smSpacing} + 4px);
`;

export const SSelected = styled.span`
    display: block;
    line-height: 100%;
    font-size: 12px;
    color: ${({ theme }) => theme.text2};
`;
export const SDropdownIcon = styled(RiArrowDropDownFill)`
    display: block;
`;

export const SDropdown = styled.div`
    position: absolute;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.bg};
    border-radius: 4px;
    z-index: 10;
    min-width: 100%;
    padding: ${v.smSpacing};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
`;

export const SOptionButton = styled.button`
    ${btnReset};
    color: inherit;
    display: block;
    width: 100%;
    padding: ${v.smSpacing};
    font-size: 12px;
    line-height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    white-space: nowrap;

    :first-of-type {
        border-top: 1px solid ${({ theme }) => theme.bg2};
    }
    border-bottom: 1px solid ${({ theme }) => theme.bg2};

    :disabled {
        cursor: initial;
    }
`;

export const SOption = styled.span`
    display: block;
    margin-left: ${v.smSpacing};
`;
export const SMessage = styled.span`
    font-size: 12px;
`;

export const SCheckBox = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 4px;
    background: ${({ isActive, theme, isDisabled }) =>
        isDisabled ? theme.bg2 : !isActive ? theme.bg2 : theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
`;

export const SCheckIcon = styled(AiOutlineCheck)`
    display: block;
    color: ${({ theme }) => theme.textSecondary};
`;

export const SClearButton = styled.button`
    ${btnReset};
    outline: none;
    border: none;
    background: none;
    padding: ${v.smSpacing} ${v.smSpacing} 0;
    font-family: inherit;
    font-size: 14px;
    letter-spacing: inherit;
    line-height: 100%;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
    :hover {
        text-decoration: underline;
    }
    :disabled {
        text-decoration: none;
        cursor: initial;
        color: ${({ theme }) => theme.textFade};
    }
`;
