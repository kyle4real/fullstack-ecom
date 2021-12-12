import styled, { css } from "styled-components";

import { btnReset, v } from "../../../styles/variables";

export const inputStyles = css`
    font-family: inherit;
    letter-spacing: inherit;
    padding: calc(${v.smSpacing} + 4px) calc(${v.smSpacing} + 4px);
    font-size: inherit;
    width: 100%;
    outline: none;
    border-radius: ${v.borderRadius};
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.bg};

    :focus {
        border-radius: 0;
        border-color: ${({ theme }) => theme.primary};
    }
`;

export const SForm = styled.form`
    width: 100%;
`;

export const SFormTitle = styled.h1`
    text-transform: uppercase;
    display: block;
    font-size: 22px;
    text-align: center;
    font-weight: 900;
    letter-spacing: 2.2px;
    margin-bottom: ${v.lgSpacing};
`;

export const SFormControl = styled.div`
    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }
`;

export const SLabel = styled.label`
    display: block;
    font-weight: 600;
    font-size: 12px;
    color: ${({ theme }) => theme.text2};
    line-height: 100%;
    margin-bottom: 4px;
`;

export const SInput = styled.input`
    ${inputStyles};
`;

export const SSubmitButton = styled.button`
    ${btnReset};
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textLight};
    margin-top: ${v.mdSpacing};
    padding: calc(${v.smSpacing} + 4px) calc(${v.smSpacing} + 4px);
    cursor: pointer;
    border-radius: ${v.borderRadius};
    :active {
        transform: scale(0.95);
    }
    :disabled {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.textFade};
        cursor: initial;
    }
    transition: 0.2s ease all;
`;

// Text Area

export const STextArea = styled.textarea`
    height: 175px;
    resize: none;
    ${inputStyles};
`;
