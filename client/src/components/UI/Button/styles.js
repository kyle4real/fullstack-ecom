import styled from "styled-components";

import { v, b } from "./../../../styles/variables";

export const SButton = styled.button`
    font-family: inherit;
    font-size: ${({ font }) => (!font ? "12px" : font)};
    font-weight: 900;
    text-transform: uppercase;
    line-height: 100%;
    padding: ${v.mdSpacing} ${({ fixed }) => (!fixed ? "0" : v.lgSpacing)};
    border: none;
    color: ${({ theme, secondary }) => (!secondary ? theme.text : theme.primary)};
    border: 1px solid ${({ theme, bg }) => (!bg ? theme.primary : theme[bg])};
    background: ${({ theme, secondary, bg }) =>
        !secondary && bg ? theme[bg] : !secondary ? theme.primary : "transparent"};
    border-radius: ${({ secondaryRadius }) =>
        !secondaryRadius ? v.borderRadiusButton : v.borderRadius};
    cursor: pointer;
    position: ${({ absolute }) => (!absolute ? "initial" : "relative")};
    transition: 0.2s ease background;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    @media ${b.sm} {
        width: ${({ fixed }) => (!fixed ? "100%" : "auto")};
    }

    :focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
    :hover {
        background: ${({ theme, secondary, bg }) =>
            !secondary && bg ? theme.primaryLighter : !secondary ? theme.primaryLight : theme.bg3};
        color: ${({ theme, secondary }) => (!secondary ? theme.text : theme.textDark)};
    }
`;
