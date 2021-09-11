import styled from "styled-components";

import { v, b } from "./../../styles/variables";

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
    border-radius: ${v.borderRadius};
    overflow: hidden;
    .test {
        transition: 0.3s ease bottom;
    }
    :hover {
        .test {
            bottom: ${v.smSpacing};
        }
    }
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

export const SContent = styled.div``;
