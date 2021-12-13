import styled from "styled-components";

import { v, b } from "./../../styles/variables";

import { AiOutlineTag } from "react-icons/ai";

export const SProductsGrid = styled.div``;

export const SGrid = styled.div`
    display: grid;
    gap: ${v.lgSpacing} ${v.lgSpacing};

    @media ${b.sm} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${b.md} {
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
    background: ${({ theme }) => theme.bg3};
    display: flex;
    align-items: flex-start;
    /* flex: 1; */
    cursor: pointer;
    position: relative;
    border-top-right-radius: ${v.borderRadius};
    border-top-left-radius: ${v.borderRadius};
    overflow: hidden;
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
    transition: 0.3s ease transform;

    :hover {
        /* transform: scale(0.95); */
    }

    :active {
        transform: scale(0.95);
    }
`;

export const SThumbnailsContainer = styled.div`
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    justify-content: space-evenly;
    cursor: initial;
    border-top: 4px solid ${({ theme }) => theme.bg};
`;

export const SThumbnailImageContainer = styled.div`
    display: flex;
    width: auto;
    cursor: pointer;
    overflow: hidden;
`;

export const SThumbnailImage = styled.img`
    transition: 0.3s ease transform;
    max-width: 100%;
    height: auto;
    :hover {
        transform: scale(1.1);
    }
`;

export const SContent = styled.div`
    color: ${({ theme }) => theme.text};
    line-height: 100%;

    padding: ${v.mdSpacing} ${v.smSpacing} ${v.smSpacing};
    @media ${b.sm} {
        padding: ${v.mdSpacing} 0 ${v.smSpacing};
    }
`;

export const SInfoControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding-bottom: ${v.mdSpacing};

    @media ${b.md} {
        padding-bottom: ${v.smSpacing};
    }
`;

export const STag = styled.span`
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    color: ${({ theme }) => theme.primary};

    ::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background: ${({ theme }) => theme.primary};
        left: 0;
        top: 0;
    }

    padding-left: ${v.mdSpacing};
    font-size: 16px;
    @media ${b.md} {
        padding-left: calc(${v.smSpacing} + 4px);
        font-size: 14px;
    }
`;
export const SSaleTag = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};

    font-size: 18px;
    @media ${b.md} {
        font-size: 14px;
    }
`;
export const SSaleIcon = styled(AiOutlineTag)`
    font-size: inherit;
    display: block;
    font-weight: 600;

    margin-right: ${v.smSpacing};
    @media ${b.md} {
        margin-right: 6px;
    }
`;
export const SSalePercentage = styled.span`
    display: block;
    text-transform: uppercase;

    font-size: 16px;
    @media ${b.md} {
        font-size: 14px;
    }
`;
export const SPrice = styled.span`
    display: block;
    font-weight: 600;

    font-size: 18px;
    @media ${b.md} {
        font-size: 16px;
    }
`;
export const STitle = styled.span`
    display: block;
    font-weight: 400;
    font-size: 20px;

    @media ${b.md} {
        font-size: 16px;
    }
`;
export const SComparePrice = styled.span`
    display: block;
    font-weight: 400;
    font-size: 14px;
    position: relative;

    :before {
        position: absolute;
        content: "";
        height: 1px;
        background: ${({ theme }) => theme.primary};
        width: 100%;
        top: 50%;
        right: 0;
        left: 0;
    }

    font-size: 16px;
    @media ${b.md} {
        font-size: 14px;
    }
`;
