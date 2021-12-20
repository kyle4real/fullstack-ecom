import styled from "styled-components";

import { v, btnReset } from "./../../../styles/variables";

export const SButton = styled.button`
    ${btnReset};
    font-size: 14px;
    line-height: 100%;
    font-weight: 400;
    padding: calc(${v.smSpacing} + 2px) ${v.mdSpacing};
    border: none;
    color: ${({ theme, secondary }) => (!secondary ? theme.textSecondary : theme.primary)};
    border: 1px solid ${({ theme, secondary }) => (!secondary ? theme.bg : theme.primary)};
    background: ${({ theme, secondary, bg }) => (!secondary ? theme.primary : "transparent")};
    border-radius: ${v.borderRadius};
    cursor: pointer;
    position: ${({ absolute }) => (!absolute ? "initial" : "relative")};
    transition: 0.2s ease background;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    :hover {
        background: ${({ theme, secondary, bg }) => (!secondary ? theme.primaryLight : theme.bg)};
    }
    :disabled {
        color: ${({ theme }) => theme.textLightFade};
        cursor: initial;
        :hover {
            background: ${({ theme, secondary, bg }) =>
                !secondary ? theme.primary : "transparent"};
        }
    }
`;

export const SAddButton = styled.button`
    ${btnReset};
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    cursor: pointer;
`;
