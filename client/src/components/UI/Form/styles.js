import styled, { css } from "styled-components";

import { v } from "../../../styles/variables";

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
    border: 1px solid ${({ theme }) => theme.bg3};

    :focus {
        border-radius: 0;
        border-color: ${({ theme }) => theme.primary};
    }
`;

export const SForm = styled.form`
    width: 100%;
`;

export const SFormControl = styled.div`
    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }
`;

export const SLabel = styled.label`
    display: block;
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.text2};
    line-height: 100%;
    margin-bottom: 4px;
`;

export const SInput = styled.input`
    ${inputStyles};
`;

// export const SSubmitButton = styled.button`
//     ${btnReset};
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     text-align: center;
//     font-size: 14px;
//     background: ${({ theme }) => theme.primary};
//     color: ${({ theme }) => theme.textLight};
//     margin-top: ${v.mdSpacing};
//     padding: calc(${v.smSpacing} + 4px) calc(${v.smSpacing} + 4px);
//     cursor: pointer;
//     border-radius: ${v.borderRadius};
//     :active {
//         transform: scale(0.95);
//     }
//     :disabled {
//         background: ${({ theme }) => theme.bg};
//         color: ${({ theme }) => theme.textFade};
//         cursor: initial;
//     }
//     transition: 0.2s ease all;
// `;
export const SSubmitButton = styled.div`
    margin-top: ${v.lgSpacing};
`;

// Text Area

export const STextArea = styled.textarea`
    height: 175px;
    resize: none;
    ${inputStyles};
`;

// Select

export const SSelect = styled.select`
    ${inputStyles};
`;

export const SSelectOption = styled.option`
    font-family: inherit;
    font-size: 14px;
    padding: inherit;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
`;
