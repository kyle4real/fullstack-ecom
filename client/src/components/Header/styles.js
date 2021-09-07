import styled from "styled-components";

import { v, b, s } from "./../../styles/variables";

import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

export const SHeader = styled.div`
    height: calc(${v.headerHeight} + ${v.headerTopHeight} + 5vh);
    display: flex;
    justify-content: flex-end;
`;

export const SHeaderAnnouncements = styled.div`
    background: ${({ theme }) => theme.primary};
    height: 5vh;
    margin-top: auto;
    width: 100%;
`;

export const SHeaderFixed = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1000;
`;

export const SHeaderTop = styled.div`
    height: ${v.headerTopHeight};
    background: ${({ theme }) => theme.bg3};
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const SNavTop = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 ${v.mdSpacing};
`;
export const SNavTopItem = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 200;
    line-height: 100%;
    padding: 0 ${v.mdSpacing};

    :not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.textDark};
    }

    color: ${({ theme }) => theme.textDark};
    :hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const SItemContent = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const SItemSpan = styled.span`
    display: block;
`;

export const SAccountIcon = styled(IoPersonOutline)`
    display: block;
    margin-right: ${v.smSpacing};
    font-size: 16px;
    color: inherit;
`;

export const SHeaderMain = styled.div`
    height: ${v.headerHeight};
    padding: 0 ${v.lgSpacing};
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 0.5px ${({ theme }) => theme.text};
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
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: -100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.bg};
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
