import { Link } from "react-router-dom";
import styled from "styled-components";

import { v, s } from "../../../styles/variables";

export const SNavItemContainer = styled.div`
    /* :not(:last-child) {
        margin-right: ${v.mdSpacing};
    } */
`;

export const SNavItem = styled(Link)`
    padding: 0 ${v.lgSpacing};
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    white-space: nowrap;
`;

export const SMenuDropdownWrap = styled.div`
    .menu-dropdown-open {
        opacity: 1;
        top: ${v.headerHeight};
        transition: 0.3s ease all;
    }
`;

export const SMenuDropdown = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
    background: ${({ theme }) => theme.bg};
    opacity: 0;
    top: 0;
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
`;

export const SDropdownContent = styled.div`
    margin: 0 auto;
    width: ${s.sm};

    height: 100%;
    padding: ${v.lgSpacing} ${v.mdSpacing} ${v.xlSpacing};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    line-height: 100%;
    color: ${({ theme }) => theme.text};
    text-align: center;
`;

export const SSection = styled.div`
    /* flex: 1; */
    height: 100%;
`;

export const SSectionTitle = styled.span`
    display: block;
    font-size: 16px;
    font-weight: 900;
    margin-bottom: ${v.mdSpacing};
    padding-top: ${({ ptop }) => (!ptop ? 0 : v.mdSpacing)};
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const SSectionLink = styled(Link)`
    color: ${({ theme }) => theme.text2};
    display: block;
    text-decoration: none;
    font-size: 14px;

    :not(:last-child) {
        margin-bottom: ${v.smSpacing};
    }
`;
