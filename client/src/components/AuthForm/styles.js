import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { v } from "./../../styles/variables";

import { BsEye, BsEyeSlash } from "react-icons/bs";

export const SAuthForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SFormContainer = styled.div`
    line-height: 100%;
    margin-top: ${v.xlSpacing};
    color: ${({ theme }) => theme.primary};
`;

export const SFormTitle = styled.span`
    text-transform: uppercase;
    display: block;
    text-align: center;
    font-weight: 900;
    font-size: 22px;
    letter-spacing: 2.2px;
    margin-bottom: ${v.lgSpacing};
`;

export const SForm = styled.form`
    text-transform: uppercase;
`;

export const SFormControl = styled.div`
    :not(:last-child) {
        margin-bottom: calc(${v.mdSpacing} + ${v.smSpacing});
    }
`;

export const SLabel = styled.label`
    display: block;
    font-weight: 600;
    font-size: 11px;
    color: ${({ theme }) => theme.primaryLight};
    line-height: 100%;
    padding-bottom: 4px;
`;

export const SInput = styled.input`
    display: block;
    width: 100%;
    font-size: 12px;
    padding: calc(${v.smSpacing} + 4px) calc(${v.smSpacing} + 4px);
    border: 1px solid ${({ theme }) => theme.primaryLighter};
    border-radius: 2px;
    outline: none;
    transition: 0.3s ease border-color;

    :focus {
        border-radius: 0;
        border-color: ${({ theme }) => theme.primary};
    }
`;

export const SPasswordWrapper = styled.div`
    position: relative;
`;
const eyeStyles = css`
    position: absolute;
    font-size: 16px;
    right: ${v.smSpacing};
    top: calc(50% - 7px);
    cursor: pointer;
    display: block;
`;
export const SShowIcon = styled(BsEye)`
    ${eyeStyles}
`;
export const SHideIcon = styled(BsEyeSlash)`
    ${eyeStyles}
`;

export const SButton = styled.button`
    width: 100%;
    font-family: inherit;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 100%;
    padding: ${v.mdSpacing} 0;
    border: none;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.primary};
    border-radius: ${v.borderRadiusButton};
    cursor: pointer;

    :focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
    :hover {
        background: ${({ theme }) => theme.primaryLight};
    }
`;

export const SFormForgotPassword = styled(Link)`
    display: block;
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.primaryLight};
    margin-top: ${v.mdSpacing};

    :hover {
        text-decoration: none;
    }
`;

export const SFormSwitch = styled.div`
    color: ${({ theme }) => theme.primaryLight};
    margin-top: ${v.lgSpacing};
    display: flex;
    justify-content: center;
    font-size: 12px;
    line-height: 100%;
`;
export const SFormSwitchSpan = styled.span`
    display: block;
`;
export const SFormSwitchLink = styled(Link)`
    display: block;
    color: ${({ theme }) => theme.primary};
`;
