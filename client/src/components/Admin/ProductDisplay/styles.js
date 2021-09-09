import styled, { css } from "styled-components";

import { v, b, s } from "./../../../styles/variables";

export const SProductDisplay = styled.div`
    display: flex;
    justify-content: center;
`;

export const SProductDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${b.lg} {
        flex-direction: initial;
    }
`;

export const SSectionOne = styled.div`
    width: 100%;
    margin-right: ${v.mdSpacing};

    @media ${b.lg} {
        width: calc(65% - calc(${v.mdSpacing} / 2));
    }
`;
export const SSectionTwo = styled.div`
    width: 100%;

    @media ${b.lg} {
        width: calc(35% - calc(${v.mdSpacing} / 2));
    }
`;

// SECTION ONE

// first card content
export const SCardControl = styled.div`
    :not(:last-child) {
        margin-bottom: ${v.mdSpacing};
    }
`;

export const SFormControl = styled.div`
    :not(:last-child) {
        margin-bottom: calc(${v.mdSpacing} + ${v.smSpacing});
    }
`;

const labelStyles = css`
    display: block;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
    line-height: 100%;
    padding-bottom: 4px;
`;
export const SLabel = styled.label`
    ${labelStyles}
`;
export const SLabelSpan = styled.span`
    ${labelStyles}
`;

const inputStyles = css`
    display: block;
    width: 100%;
    font-size: 14px;
    padding: calc(${v.smSpacing} + 4px) calc(${v.smSpacing} + 4px);
    border: 1px solid ${({ theme }) => theme.primaryLighter};
    border-radius: 2px;
    outline: none;
    transition: 0.3s ease border-color;

    :focus {
        border-radius: 0;
        border-color: ${({ theme }) => theme.primary};
    }
`;
export const STITLEInput = styled.input`
    ${inputStyles}
`;
export const SDESCRIPTIONInput = styled.textarea`
    ${inputStyles};
    height: 175px;
    resize: none;
`;

export const SMediaContainer = styled.div``;
export const SMedia = styled.div`
    background: ${({ theme }) => theme.bg2};
    padding: ${v.mdSpacing};
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const SMainImageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    @media ${b.sm} {
        width: 40%;
    }
`;
export const SImageOverlay = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0;
    background: ${({ theme }) => theme.bg};
    cursor: pointer;
    opacity: 0;

    :hover {
        opacity: 1;
        transition: 0.2s ease;
    }
`;

export const SMainImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: ${v.mdSpacing};

    @media ${b.sm} {
        margin-top: 0;
        width: calc(100% - 40%);
    }
`;
export const SImageContainer = styled.div`
    position: relative;
    width: calc(100% / 2 - ${v.mdSpacing});
    margin: calc(${v.mdSpacing} / 2);
    height: fit-content;

    @media ${b.sm} {
        width: calc(100% / 3 - ${v.smSpacing});
        margin: 0;
        margin-left: ${v.smSpacing};
        margin-bottom: ${v.smSpacing};
    }
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;
