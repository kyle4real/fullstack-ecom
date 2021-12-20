import { Link } from "react-router-dom";
import styled from "styled-components";

import { v, b, s } from "../../../styles/variables";

export const SCardsGrid = styled.div`
    display: grid;
    gap: ${v.mdSpacing};
    @media ${b.md} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const SCardContainer = styled.div`
    background: ${({ theme }) => theme.bg};
    padding: ${({ customPadding }) => (!customPadding ? v.mdSpacing : v[customPadding])};
    border-radius: ${v.borderRadius};
    box-shadow: 0 0 5px rgba(23, 24, 24, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15);
`;

export const SCardLinkContainer = styled(Link)`
    text-decoration: none;
    color: inherit;
    background: ${({ theme }) => theme.bg2};
    padding: ${({ customPadding }) => (!customPadding ? v.mdSpacing : v[customPadding])};
    border-radius: ${v.borderRadius};
`;

export const SFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SFixedContainer = styled.div`
    width: 100%;
    max-width: ${({ maxWidth }) => {
        if (!maxWidth) return "initial";
        else if (!isNaN(maxWidth)) return `${maxWidth}px`;
        else return s[maxWidth];
    }};
`;

export const STitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${({ theme }) => theme.bg};
`;

export const SOptionButtonsContainer = styled.div`
    padding: ${v.mdSpacing};
`;
