import styled from "styled-components";

import { v, b } from "./../../styles/variables";

import { AiOutlineTag } from "react-icons/ai";

export const SProductsGrid = styled.div``;

export const SGrid = styled.div`
    display: grid;
    gap: ${v.mdSpacing};

    grid-template-columns: repeat(2, 1fr);

    @media ${b.md} {
        gap: ${v.lgSpacing};
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${b.lg} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const SGridItem = styled.div`
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
`;

export const SImageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    position: relative;
    overflow: hidden;
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
    transition: 0.3s ease transform;

    :active {
        transform: scale(0.95);
    }
`;

export const SContent = styled.div`
    color: ${({ theme }) => theme.text};
    white-space: nowrap;

    padding: ${v.mdSpacing} 0;
    @media ${b.sm} {
        padding: ${v.mdSpacing} 0 ${v.mdSpacing};
    }
`;

export const STitle = styled.span`
    display: block;
    font-weight: 500;
    font-size: 15px;
    white-space: initial;

    @media ${b.md} {
        font-size: 17px;
    }
`;
export const SPricing = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${v.smSpacing};
`;
export const SPrice = styled.span`
    display: block;
    font-size: 15px;
    color: ${({ theme }) => theme.text2};
`;
export const SComparePrice = styled.span`
    font-size: 14px;
    display: block;
    margin-left: ${v.smSpacing};
    position: relative;

    ::after {
        content: "";
        position: absolute;
        height: 1px;
        background: ${({ theme }) => theme.primary};
        width: 100%;
        top: 50%;
        left: 0;
    }
`;
