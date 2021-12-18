import styled, { css } from "styled-components";

import { v, b } from "../../../styles/variables";

// VARIANT IMAGE SELECT /////////////////////////////////////////////////

export const SNoMedia = styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    margin: ${v.lgSpacing} 0;
`;

export const SMediaGrid = styled.div`
    padding: ${v.mdSpacing};
    display: grid;
    gap: ${v.mdSpacing};
    background: ${({ theme }) => theme.bg};
    max-height: 50vh;
    overflow: auto;

    grid-template-columns: repeat(3, 1fr);
    @media ${b.sm} {
        grid-template-columns: repeat(6, 1fr);
    }
`;

const activeStyles = css`
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${v.cardBoxShadow};
`;
export const SImageContainer = styled.div`
    display: flex;
    position: relative;

    border: 3px solid transparent;

    ${({ active }) => active && activeStyles};
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

export const SBottomBar = styled.div`
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
    white-space: nowrap;

    @media ${b.sm} {
        display: block;
    }
`;

export const SButtonContainer = styled.div`
    text-align: center;

    width: 100%;
    @media ${b.sm} {
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    > button {
        :not(:last-of-type) {
            margin-bottom: ${v.smSpacing};
        }
        @media ${b.sm} {
            :not(:last-of-type) {
                margin-bottom: 0;
                margin-right: ${v.smSpacing};
            }
        }
    }
`;
