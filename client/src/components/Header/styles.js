import styled from "styled-components";

import { v, b, s } from "./../../styles/variables";

import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const SHeader = styled.div`
    height: ${v.headerHeight};
    padding: 0 ${v.lgSpacing};
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.bg2};
    position: relative;
`;

export const SLogo = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.text};
    margin: auto 0;
    position: relative;
    z-index: 100;
`;

export const SNav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const SNavItem = styled(Link)`
    text-decoration: none;
    padding: ${v.smSpacing};
    :not(:last-child) {
        margin-right: ${v.mdSpacing};
    }
    color: ${({ theme }) => theme.text2};
`;

export const SMenuToggle = styled.button`
    margin: auto 0;
    padding: 0;
    outline: none;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text2};
    cursor: pointer;
    position: relative;
    z-index: 100;
`;

export const SMenuOpen = styled(BiMenu)`
    display: block;
    font-size: 1.8rem;
`;
export const SMenuClose = styled(AiOutlineClose)`
    display: block;
    font-size: 1.8rem;
`;

export const SMenu = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: -100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.bg2Alpha};
    transform: ${({ menuOpen }) => (!menuOpen ? "none" : "translateY(100vh)")};
    transition: 0.3s ease transform;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
`;

export const SMenuNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
export const SMenuNavItem = styled(Link)`
    display: block;
    text-decoration: none;
    padding: ${v.mdSpacing} ${v.lgSpacing};
    :not(:last-child) {
        margin-bottom: ${v.mdSpacing};
    }
    color: ${({ theme }) => theme.text2};
`;
