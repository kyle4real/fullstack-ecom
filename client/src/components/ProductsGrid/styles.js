import styled from "styled-components";

import { v, b } from "./../../styles/variables";

import { AiOutlineTag } from "react-icons/ai";

export const SProductsGrid = styled.div``;

export const SGrid = styled.div`
    display: grid;
    grid-gap: ${v.mdSpacing} ${v.mdSpacing};

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
    justify-self: center;
    align-self: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export const SImageContainer = styled.div`
    background: ${({ theme }) => theme.primaryLighter};
    display: flex;
    align-items: center;
    flex: 1;
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
        transform: scale(1.025);
    }
`;

export const SThumbnailsContainer = styled.div`
    height: calc(4vh + ${v.smSpacing} * 2);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: ${v.smSpacing};
    display: flex;
    justify-content: space-evenly;
    cursor: initial;
`;

export const SThumbnailImageContainer = styled.div`
    display: flex;
    width: auto;
    cursor: pointer;
    box-shadow: ${v.cardBoxShadow};

    transition: 0.3s ease transform;

    :hover {
        transform: scale(1.1);
    }
`;

export const SThumbnailImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SContent = styled.div`
    padding: ${v.smSpacing} 0;
    color: ${({ theme }) => theme.primary};
    line-height: 100%;
`;

export const SInfoControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4px;
`;

export const STag = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 600;
    position: relative;
    padding-left: calc(${v.smSpacing} + 3px);

    ::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background: ${({ theme }) => theme.primary};
        left: 0;
        top: 0px;
    }
`;
export const SSaleTag = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`;
export const SSaleIcon = styled(AiOutlineTag)`
    font-size: 12px;
    display: block;
    margin-right: 6px;
    font-weight: 600;
`;
export const SSalePercentage = styled.span`
    display: block;
    font-size: 12px;
    text-transform: uppercase;
`;
export const SPrice = styled.span`
    display: block;
    font-weight: 600;
    font-size: 14px;
`;
export const STitle = styled.span`
    display: block;
    font-weight: 400;
    font-size: 14px;
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
        background: ${({ theme }) => theme.primaryLight};
        width: 100%;
        top: 50%;
        right: 0;
        left: 0;
    }
`;
