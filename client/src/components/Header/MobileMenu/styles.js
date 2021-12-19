import { Link } from "react-router-dom";
import styled from "styled-components";

import { v, b } from "../../../styles/variables";

export const SMenu = styled.div`
    position: fixed;
    height: fit-content;
    overflow: auto;
    z-index: -1;
    width: 100%;
    top: ${v.headerHeight};
    bottom: 0;
    left: -100%;
    right: 0;
    transform: ${({ menuOpen }) => (!menuOpen ? "none" : "translatex(100%)")};
    transition: 0.3s ease transform;
    padding: ${v.mdSpacing} 0;
    backdrop-filter: blur(4px);
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    box-shadow: inset 0 -1px ${({ theme }) => theme.bg3};

    ::-webkit-scrollbar {
        display: none;
    }
    ::-ms-overflow-style: none;
    scrollbar-width: none;

    @media ${b.lg} {
        display: none;
    }
`;

export const SMenuNav = styled.nav`
    width: 100%;
`;
export const SMenuNavItem = styled(Link)`
    display: block;
    text-decoration: none;
    padding: ${v.mdSpacing} ${v.lgSpacing};
    :not(:last-child) {
        margin-bottom: ${v.mdSpacing};
    }
    color: inherit;
`;
