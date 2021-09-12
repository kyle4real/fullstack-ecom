import styled, { css } from "styled-components";

import { v, b } from "../../styles/variables";

import { RiArrowGoBackLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";

export const SProductPage = styled.div`
    @media ${b.md} {
        display: flex;
    }
`;

export const SMediaSection = styled.section`
    @media ${b.md} {
        width: 65%;
    }
    @media ${b.lg} {
        width: 60%;
    }
`;

export const SMobileWrapper = styled.div`
    display: initial;
    @media ${b.md} {
        display: none;
    }
`;

export const SDesktopWrapper = styled.div`
    display: none;
    @media ${b.md} {
        display: initial;
    }
`;

export const SContentSection = styled.section`
    height: 100%;

    @media ${b.md} {
        width: 45%;
        min-width: 380px;

        position: -webkit-sticky;
        position: sticky;
        top: 10rem;
    }
    @media ${b.lg} {
        min-width: 450px;
        width: 40%;
    }
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

// MOBILE

export const SMobileMediaBottom = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow-x: auto;
    margin: ${v.smSpacing} 0;
`;

export const SMobileImageContainer = styled.div`
    display: flex;
    margin-right: 4px;
    min-width: 125px;
    cursor: pointer;

    :first-child {
        margin-left: 4px;
    }
`;

export const SMobileImage = styled.img`
    transition: 0.3s ease border;
    border: 2px solid black;
    max-width: 100%;
    height: auto;
`;

// CONTENT ////////////////////////////////////////////////////

export const SContent = styled.div`
    line-height: 100%;
    padding: 0 ${v.mdSpacing};
    margin-top: ${v.lgSpacing};

    @media ${b.sm} {
        padding: 0;
    }

    @media ${b.md} {
        margin-top: 0;
        margin-left: 30px;
    }

    @media ${b.lg} {
        margin-left: 60px;
    }
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
    text-transform: uppercase;

    font-size: 18px;
    @media ${b.sm} {
        font-size: 24px;
    }
`;
export const SProductPrice = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-top: ${({ mobile }) => (!mobile ? 0 : v.mdSpacing)};

    display: ${({ mobile }) => (!mobile ? "none" : "block")};
    @media ${b.md} {
        display: ${({ mobile }) => (mobile ? "none" : "block")};
    }
`;
export const SCollectionName = styled.span`
    margin-top: ${v.mdSpacing};
    display: block;
    font-weight: 400;

    color: ${({ theme }) => theme.primaryLight};

    font-size: 14px;
    @media ${b.sm} {
        font-size: 16px;
    }
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
    font-size: 16px;
    @media ${b.sm} {
        font-size: 18px;
    }
`;
export const SVariantSelection = styled.span`
    font-size: 18px;
    @media ${b.sm} {
        font-size: 16px;
    }
`;

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

    display: none;
    @media ${b.mdSpacing} {
        display: block;
    }
`;
export const SButtonControl = styled.div`
    :not(:last-child) {
        margin-bottom: calc(${v.smSpacing} + 4px);
    }
`;

export const SContentCARD = styled.div`
    background: ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    margin: ${v.lgSpacing} 0;
    padding: ${v.lgSpacing};
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
