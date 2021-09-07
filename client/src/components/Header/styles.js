import styled, { css } from "styled-components";

import { v } from "./../../styles/variables";

import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const height = css`
    height: calc(${v.headerHeight} + ${v.headerTopHeight} + 5vh);
`;
const heightMin = css`
    height: calc(${v.headerHeight});
`;
export const SHeader = styled.div`
    ${({ isMin }) => (!isMin ? height : heightMin)}
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

export const SLogoContainer = styled.div`
    margin: auto 0;
    flex: ${({ isMin }) => (!isMin ? "1" : "initial")};
`;
export const SLogo = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.text};
`;

export const SNav = styled.nav`
    display: flex;
    justify-content: center;
    /* height: 100%; */
    flex: 1;
`;

export const SNavItem = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: ${v.smSpacing};
    :not(:last-child) {
        margin-right: ${v.mdSpacing};
    }
    color: ${({ theme }) => theme.text2};
`;

export const SMenuToggle = styled.button`
    flex: 1;
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

export const SCartIconContainer = styled.div`
    flex: 1;
    margin: auto 0;
    display: flex;
    justify-content: flex-end;
`;
export const SCartLink = styled(Link)`
    display: block;
    position: relative;
`;
export const SCartIcon = styled(AiOutlineShoppingCart)`
    color: ${({ theme }) => theme.text};
    display: block;
    font-size: 1.8rem;
`;
export const SCartBadge = styled.div`
    display: block;
    position: absolute;
    top: -4px;
    right: -6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SBadgeSpan = styled.span`
    line-height: 100%;
    display: block;
    font-size: 11px;
    font-weight: 900;
`;

export const SMenu = styled.div`
    position: absolute;
    height: 100vh;
    z-index: -1;
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
