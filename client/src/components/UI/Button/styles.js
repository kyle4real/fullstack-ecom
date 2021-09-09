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
