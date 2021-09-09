import styled from "styled-components";

import { v } from "./../../../styles/variables";

export const SButton = styled.button`
    width: 100%;
    font-family: inherit;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 100%;
    padding: ${v.mdSpacing} 0;
    border: none;
    color: ${({ theme, secondary }) => (!secondary ? theme.text : theme.primary)};
    border: 1px solid ${({ theme }) => theme.primary};
    background: ${({ theme, secondary }) => (!secondary ? theme.primary : "transparent")};
    border-radius: ${v.borderRadiusButton};
    cursor: pointer;
    transition: 0.2s ease background;

    :focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
    :hover {
        background: ${({ theme, secondary }) =>
            !secondary ? theme.primaryLight : theme.primaryLighter};
        color: ${({ theme, secondary }) => (!secondary ? theme.text : theme.textDark)};
    }
`;
