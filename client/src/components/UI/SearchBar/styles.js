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
    padding: ${v.smSpacing} ${v.mdSpacing};
    @media ${b.lg} {
        padding: ${v.smSpacing} ${v.lgSpacing};

        max-width: ${({ customSize }) =>
            !customSize ? s.lg : customSize === "fill" ? "initial" : s[customSize]};
    }
`;
