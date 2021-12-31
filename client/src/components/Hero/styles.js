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

export const SHeroContent = styled.div`
    position: absolute;
    z-index: 2;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;
