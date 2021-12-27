import styled, { css } from "styled-components";

import { v, b } from "../../styles/variables";

import { RiArrowGoBackLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";
import { SSelect } from "../UI/Form/styles";

export const SProductGrid = styled.div`
    @media ${b.sm} {
        display: grid;
        grid-template-columns: 1fr minmax(380px, 1fr);
        > div {
            :last-of-type {
                align-self: start;
                /* position: sticky;
                top: 10rem; */
            }
        }
    }
`;

export const SMobileWrapper = styled.div`
    display: initial;
    @media ${b.sm} {
        display: none;
    }
`;

export const SDesktopWrapper = styled.div`
    display: none;
    @media ${b.sm} {
        display: initial;
    }
`;

export const SMediaTOP = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${v.smSpacing};
    margin-bottom: calc(${v.smSpacing} + 4px);
`;

export const SMediaMAIN = styled.div`
    width: 100%;
`;

export const SMediaBOTTOM = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${v.smSpacing};
    margin-top: calc(${v.smSpacing} + 4px);
`;

export const SImageContainer = styled.div`
    display: flex;
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
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
    max-width: 100%;
    height: auto;
`;

// CONTENT ////////////////////////////////////////////////////

export const SContent = styled.div`
    line-height: 100%;
    margin-top: ${v.lgSpacing};
    margin-bottom: ${v.xxlSpacing};

    @media ${b.sm} {
        margin-bottom: 0;
        padding: 0;
        margin-left: ${v.mdSpacing};
    }

    @media ${b.md} {
        margin-top: 0;
        margin-left: ${v.lgSpacing};
    }

    @media ${b.lg} {
        margin-left: ${v.xlSpacing};
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
    font-weight: 500;
    text-transform: uppercase;

    font-size: 18px;
    @media ${b.sm} {
        font-size: 24px;
    }
`;
export const SProductPrice = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 500;
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

    color: ${({ theme }) => theme.primary};

    font-size: 14px;
    @media ${b.sm} {
        font-size: 16px;
    }
`;

export const SVariantSelect = styled(SSelect)`
    border-color: ${({ theme }) => theme.bg3};
`;

export const SVariantSelection = styled.div`
    padding-bottom: ${v.mdSpacing};
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
`;

export const SContentBUTTONS = styled.div`
    margin-top: ${v.mdSpacing};

    display: none;
    @media ${b.md} {
        display: block;
    }
`;
export const SButtonControl = styled.div`
    :not(:last-child) {
        margin-bottom: calc(${v.smSpacing} + 4px);
    }
`;

export const SButtonFIXED = styled.div`
    position: fixed;
    z-index: 100;
    bottom: ${v.lgSpacing};
    left: 0;
    right: 0;
    padding: 0 ${v.mdSpacing};
    width: 100%;
    display: flex;
    justify-content: center;
    @media ${b.md} {
        display: none;
    }
`;

export const SContentCARD = styled.div`
    /* background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius}; */
    margin: ${v.lgSpacing} 0;
    /* padding: ${v.lgSpacing}; */
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
