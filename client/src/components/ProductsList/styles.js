import styled from "styled-components";

import { v, b } from "./../../styles/variables";

import { Link } from "react-router-dom";

export const SProductsList = styled.div``;

export const SHead = styled.div``;

export const SHeadTitle = styled.span`
    display: block;
    padding: 0 calc(${v.smSpacing} + 4px) ${v.mdSpacing};
    font-size: 1.2rem;
`;

export const SList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const SListItem = styled.div`
    padding: ${v.smSpacing};
    width: auto;
    max-width: 400px;

    @media ${b.sm} {
        min-height: 425px;
        width: auto;
    }

    @media ${b.md} {
        width: auto;
        /* width: calc(100% / 2); */
    }

    @media ${b.lg} {
        width: calc(100% / 3);
    }
`;

export const SContent = styled.div`
    border-radius: ${v.borderRadius};
    cursor: pointer;
    position: relative;
    overflow: hidden;
`;

export const SContentImgContainer = styled.div`
    max-height: 80%;
    width: 100%;
    overflow: hidden;
    display: flex;
`;

export const SContentImg = styled.img`
    max-width: 100%;

    margin: 0 auto;
    transition: 0.3s ease transform;
    :hover {
        transform: scale(0.95);
    }
`;

export const SContentInfo = styled.div`
    padding: ${v.smSpacing};
    position: relative;
    z-index: 10;
    color: ${({ theme }) => theme.primary};
    display: flex;
    line-height: 100%;
`;

export const SInfo = styled.div``;

export const STag = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 600;
    position: relative;
    padding-left: calc(${v.smSpacing} + 2px);
    text-transform: uppercase;

    ::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 16px;
        background: black;
        left: 0;
    }
`;

export const STitle = styled.span`
    margin-top: ${v.smSpacing};
    display: block;
`;

export const SVariants = styled.ul`
    margin-top: ${v.smSpacing};
    display: flex;
    padding: 0;
    list-style: none;
`;
export const SVariant = styled.li`
    padding: 0;
`;
export const SVariantLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    color: ${({ theme }) => theme.primaryLight};
`;

export const SPrice = styled.span`
    display: block;
    margin-left: auto;
    font-size: 16px;
    font-weight: 600;
`;

export const SSaleContainer = styled.div`
    margin-left: auto;
    height: 100%;
    line-height: 100%;
    text-align: right;
`;
export const SRegularPrice = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    margin-top: ${v.smSpacing};

    ::before {
        content: "";
        position: absolute;
        width: calc(100% - 2px);
        height: 1px;
        top: 50%;
        left: 0;
        background: ${({ theme }) => theme.textDark};
    }
`;
export const SSalePrice = styled.span`
    display: block;
    font-size: 16px;
    font-weight: 600;
`;
