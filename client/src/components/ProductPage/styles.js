import styled, { css } from "styled-components";

import { v } from "../../styles/variables";

import { RiArrowGoBackLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";

export const SProductPage = styled.div`
    display: flex;
`;

export const SMediaSection = styled.section`
    width: 60%;
`;

export const SContentSection = styled.section`
    width: 40%;
    min-width: 450px;
    height: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 10rem;
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
    justify-content: center;
    align-items: center;
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
    color: ${({ theme }) => theme.primaryLight};
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
    border: 2px solid ${({ theme, active }) => (!active ? "transparent" : theme.primary)};
    transition: 0.2s ease border;
`;

export const SContentBUTTONS = styled.div`
    margin-top: ${v.mdSpacing};
`;
export const SButtonControl = styled.div`
    :not(:last-child) {
        margin-bottom: calc(${v.smSpacing} + 4px);
    }
`;

export const SContentCARD = styled.div`
    background: ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    padding: ${v.lgSpacing};
    margin: ${v.lgSpacing} 0;
`;
export const SCardSpanControl = styled.div`
    display: flex;
    align-items: center;
    :not(:last-child) {
        margin-bottom: ${v.lgSpacing};
    }
`;
export const SCardSpan = styled.span`
    display: block;
    font-weight: 600;
    font-size: 16px;
    margin-left: ${v.mdSpacing};
`;
const cardIconStyle = css`
    display: block;
    font-size: 20px;
`;
export const SReturnIcon = styled(RiArrowGoBackLine)`
    ${cardIconStyle}
`;
export const SShippingIcon = styled(GiCardboardBox)`
    ${cardIconStyle}
`;
export const SExpressIcon = styled(FaShippingFast)`
    ${cardIconStyle}
`;

export const SContentACCORDIAN = styled.div``;
