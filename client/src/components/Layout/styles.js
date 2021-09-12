import styled from "styled-components";

import { v, b, s } from "./../../styles/variables";

export const SLayout = styled.div`
    /* display: flex;
    flex-direction: column; */
    display: block;
    /* overflow-y: auto; */
    height: 100%;
    position: relative;
`;
export const SPage = styled.div`
    transition: 0.3s ease padding;
    /* flex: 1; */
    padding: ${({ isProduct }) => (!isProduct ? v.lgSpacing : 0)};

    @media ${b.sm} {
        padding: ${v.lgSpacing};
    }

    @media ${b.lg} {
        margin: 0 auto;
        width: 100%;
        max-width: ${({ size }) => (!size ? s.lg : s[size])};
    }
`;

export const SMobileWrapper = styled.div`
    display: block;
    @media ${b.sm} {
        display: none;
    }
`;

export const SDesktopWrapper = styled.div`
    display: none;
    @media ${b.sm} {
        display: block;
    }
`;

export const SCartWrap = styled.div`
    .cart-open {
        right: 0;
    }
`;

export const SCartDrawerContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    background: white;
    transition: 0.4s ease-in right;
    z-index: 10000;
    box-shadow: ${v.cardBoxShadow};

    width: 70%;
    right: -70%;
    @media ${b.sm} {
        width: 60%;
        right: -60%;
    }
    @media ${b.md} {
        width: 27.5rem;
        right: -27.5rem;
    }
`;
