import styled from "styled-components";

import { v, b } from "../../styles/variables";

export const SHero = styled.div`
    position: relative;
    display: flex;
`;

export const SHeroImage = styled.img`
    width: 100%;
    height: 375px;
    object-fit: cover;
    position: relative;
    z-index: 1;

    @media ${b.md} {
        height: 475px;
    }
`;

export const SHeroOverlay = styled.div`
    position: absolute;
    z-index: 2;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: ${v.mdSpacing};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textLight};
`;

export const SHeroContent = styled.div`
    text-align: center;
`;

export const SHeroContentTitle = styled.span`
    display: block;
    font-size: 36px;
    font-weight: 500;

    @media ${b.md} {
        font-size: 52px;
    }
`;
export const SHeroContentSubtitle = styled.span`
    display: block;
    font-size: 18px;
    margin-top: ${v.smSpacing};
    @media ${b.md} {
        font-size: 24px;
    }
`;
