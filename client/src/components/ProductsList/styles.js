import styled from "styled-components";

import { v, b, s } from "./../../styles/variables";

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
    height: 425px;

    max-width: 303px;
    min-width: 303px;
    width: calc(100% / 2);

    @media ${b.lg} {
        max-width: initial;
        width: calc(100% / 3);
    }
`;

export const SContent = styled.div`
    height: 100%;
    background: ${({ theme }) => theme.bg2Alpha};
    cursor: pointer;
    position: relative;
`;

export const SContentImgContainer = styled.div`
    height: 80%;
    display: flex;
    overflow: hidden;
    padding: ${v.smSpacing};
`;

export const SContentImg = styled.img`
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    transition: 0.3s ease transform;
    :hover {
        transform: scale(1.1);
    }
`;

export const SContentInfo = styled.div`
    padding: ${v.mdSpacing} ${v.mdSpacing};
    position: relative;
    z-index: 10;
    height: calc(20%);
`;

export const SInfo = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1;
`;
export const STitle = styled.span`
    display: block;
    white-space: pre-wrap;
    font-size: 16px;
`;
export const SPrice = styled.span`
    display: block;
    font-size: 17px;
`;
