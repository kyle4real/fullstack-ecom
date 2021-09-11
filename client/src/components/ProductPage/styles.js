import styled from "styled-components";

import { v } from "../../styles/variables";

export const SProductPage = styled.div`
    display: flex;
`;

export const SMediaSection = styled.section`
    flex: 1 1 0%;
`;

export const SContentSection = styled.section`
    width: 20vw;
`;

export const SMediaTOP = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${v.smSpacing};
    margin-bottom: calc(${v.smSpacing} + 4px);
`;

export const SMediaItemTOP = styled.div`
    justify-self: center;
    align-self: center;
    text-align: center;
`;

export const SImageContainer = styled.div`
    display: flex;
`;
export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SMediaMAIN = styled.div``;

export const SMediaBOTTOM = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${v.smSpacing};
    margin-top: calc(${v.smSpacing} + 4px);
`;

export const SMediaItemBOTTOM = styled.div`
    justify-self: center;
    align-self: center;
    text-align: center;
`;
