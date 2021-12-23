import styled from "styled-components";

import { v, s, b } from "../../../styles/variables";

export const SSearchBar = styled.div`
    border-top: 1px solid ${({ theme }) => theme.bg3};
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
`;

export const SSearchBarContent = styled.div`
    min-width: ${({ minWidth }) => (!minWidth ? "initial" : s[minWidth])};
    padding: ${v.smSpacing};
    margin: 0 auto;
    height: 100%;

    transition: 0.3s ease padding;
    padding: 0 ${v.mdSpacing};
    @media ${b.lg} {
        padding: 0 ${v.lgSpacing};

        max-width: ${({ customSize }) =>
            !customSize ? s.lg : customSize === "fill" ? "initial" : s[customSize]};
    }
    display: flex;
    > div {
        :not(:last-of-type) {
            padding-right: ${v.smSpacing};
            margin-right: ${v.smSpacing};
            border-right: 1px solid ${({ theme }) => theme.bg3};
        }
        display: flex;
        align-items: center;
        > select {
            width: fit-content;
            background: none;
            font-size: 14px;
            font-weight: 500;
            border: none;
            cursor: pointer;
        }
        > label {
            margin-right: ${v.smSpacing};
            margin-bottom: 0;
            font-weight: 400;
            text-transform: uppercase;
        }
    }
`;
