import styled from "styled-components";

import { v, b } from "../../../../styles/variables";

// VARIANT IMAGE SELECT /////////////////////////////////////////////////

export const SNotification = styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    margin: ${v.lgSpacing} 0;
`;

export const SVariantSelect = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: ${v.mdSpacing};
    overflow-y: auto;
    max-height: 40vh;
    box-shadow: inset 0 0 10px -3px ${({ theme }) => theme.primary};
`;

export const SImageContainer = styled.div`
    display: flex;
    position: relative;
    width: calc(100% / 2 - ${v.mdSpacing} * 2);
    margin: ${v.mdSpacing};
    height: fit-content;

    @media ${b.sm} {
        width: calc(100% / 3 - ${v.mdSpacing} * 2);
        margin: 0;
        margin: ${v.mdSpacing};
    }

    border: 1px solid ${({ theme, active }) => (!active ? "transparent" : theme.primary)};
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SCheckBoxContainer = styled.div`
    position: absolute;
    top: -7.5px;
    right: -7.5px;
    z-index: 1000;
`;

export const SBottomPanel = styled.div`
    /* margin-top: ${v.mdSpacing}; */
    /* border-top: 1px solid ${({ theme }) => theme.primary}; */
    padding-top: ${v.mdSpacing};
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${b.sm} {
        justify-content: space-between;
    }
`;

export const SVariantTitle = styled.span`
    display: none;
    font-weight: 600;
    font-size: 18px;
    padding-left: ${v.smSpacing};

    @media ${b.sm} {
        display: block;
    }
`;

export const SButtonContainer = styled.div`
    text-align: center;
    width: 100%;
    @media ${b.sm} {
        text-align: right;
    }
    button {
        margin: calc(${v.smSpacing} / 2);
        @media ${b.sm} {
            margin-right: ${v.mdSpacing};
        }
    }
`;
