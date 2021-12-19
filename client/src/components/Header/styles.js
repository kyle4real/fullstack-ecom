import styled, { css } from "styled-components";

import { v, s, b } from "./../../styles/variables";

import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";
import {
    AiOutlineClose,
    AiOutlineShoppingCart,
    AiOutlineLeft,
    AiOutlineRight,
} from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const height = css`
    height: calc(${v.headerHeight} + ${v.headerTopHeight} + 5vh);
`;
// const heightMin = css`
//     height: ${v.headerHeight};
// `;
const heightMid = css`
    height: calc(${v.headerHeight} + ${v.headerTopHeight});
`;

// HEADER ////////////////////////////////////////////////////
export const SHeader = styled.div`
    height: ${v.headerHeight};
    position: relative;

    @media ${b.lg} {
        ${({ isAdminArea }) => (isAdminArea ? heightMid : height)}
    }
`;

// HEADER FIXED //////////////////////////////////////////////

export const SHeaderFixed = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1000;
`;

// HEADER TOP ////////////////////////////////////////////////

export const SHeaderTop = styled.div`
    height: ${v.headerTopHeight};
    background: ${({ theme }) => theme.bg3};
    display: none;
    justify-content: flex-end;
    align-items: center;

    @media ${b.lg} {
        display: flex;
    }
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
    font-weight: 400;
    line-height: 100%;
    padding: 0 ${v.mdSpacing};

    :not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.bg};
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
    background: ${({ theme }) => theme.bg};
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.bg3};
    position: relative;
`;

export const SLogoContainer = styled.div`
    margin: auto 0;
    @media ${b.lg} {
        flex: 1;
    }
`;
export const SLogo = styled(Link)`
    display: inline-block;
    text-decoration: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.text};
`;

export const SNav = styled.nav`
    display: none;
    justify-content: center;
    flex: 1;

    @media ${b.lg} {
        display: flex;
    }
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
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    position: relative;
    z-index: 100;

    @media ${b.lg} {
        display: none;
    }
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
export const SCartLink = styled.div`
    display: block;
    position: relative;
    cursor: pointer;
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
    background: ${({ theme }) => theme.primaryLighter};
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SBadgeSpan = styled.span`
    line-height: 100%;
    display: block;
    font-size: 11px;
    font-weight: 900;
    margin-right: -1px;
`;
