import styled from "styled-components";

import { v } from "../../styles/variables";

export const SProductPage = styled.div`
    display: flex;
`;

export const SMediaSection = styled.section`
    width: 60%;
`;

export const SContentSection = styled.section`
    width: 40%;
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

export const SContent = styled.div`
    margin-left: 60px;
    line-height: 100%;
`;

export const SContentTOP = styled.div`
    padding-bottom: ${v.lgSpacing};
`;

export const SContentSpacebetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${v.mdSpacing};
`;
export const SProductTitle = styled.h1`
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
`;
export const SProductPrice = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 600;
`;
export const SCollectionName = styled.span`
    margin-top: ${v.mdSpacing};
    display: block;
    font-weight: 400;
    font-size: 16px;
`;

export const SContentVARIANTS = styled.div`
    padding-bottom: ${v.mdSpacing};
    border-bottom: 1px solid ${({ theme }) => theme.primaryLighter};
`;

export const SVariantsHead = styled.div`
    margin-bottom: calc(${v.smSpacing} + 4px);
`;
export const SVariantsName = styled.span`
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 4px;
    font-size: 18px;
`;
export const SVariantSelection = styled.span``;

export const SVariantsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${v.smSpacing};
`;
export const SVariantGridItem = styled.div`
    justify-self: center;
    align-self: center;
    text-align: center;
`;
export const SVariantImageContainer = styled.div`
    cursor: pointer;
    display: flex;
    border: 1px solid ${({ theme, active }) => (!active ? "transparent" : theme.primary)};
    transition: 0.2s ease border;
`;
