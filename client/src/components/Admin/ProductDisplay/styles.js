import styled, { css } from "styled-components";

import { v, b, s } from "./../../../styles/variables";

import { BiImageAdd } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export const SPopup = styled.div`
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: ${({ theme }) => theme.primaryLighter};
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${v.headerHeight};
    @media ${b.lg} {
        height: calc(${v.headerHeight} + ${v.headerTopHeight});
    }
`;
export const SPrompt = styled.span`
    color: ${({ theme }) => theme.primary};
    font-size: 18px;
    font-weight: 900;
    display: none;

    @media ${b.sm} {
        display: block;
    }
`;
export const SPromptContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${v.lgSpacing};
    width: ${s.lg};

    @media ${b.sm} {
        justify-content: space-between;
    }
`;
export const SPromptButtonContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    button {
        margin-right: ${v.smSpacing};
    }
`;

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

// card one /////////////////////////////////////////////////
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

// card two /////////////////////////////////////////////////
export const SMediaContainer = styled.div``;
export const SMedia = styled.div`
    background: ${({ theme }) => theme.bg2};
    padding: ${v.mdSpacing};
    display: flex;
    flex-wrap: wrap;
    width: 100%;
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

export const SMainImageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;

    @media ${b.sm} {
        width: 40%;
    }
`;
export const SMainImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    display: flex;

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

export const SAddImage = styled.div`
    width: calc(100% - 2px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dotted ${({ theme }) => theme.primaryLighter};
    color: ${({ theme }) => theme.primaryLighter};
    padding: ${v.mdSpacing} 0;

    :hover {
        transition: 0.2s ease;
        color: ${({ theme }) => theme.primaryLight};
        border-color: ${({ theme }) => theme.primaryLight};
    }
`;
export const SAddImageIcon = styled(BiImageAdd)`
    display: block;
    font-size: 3rem;
`;

export const SIMAGEInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`;

// card three /////////////////////////////////////////////////
export const SVariantsContainer = styled.div``;

export const SVariantsHead = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: ${v.mdSpacing};
`;

export const STable = styled.table`
    width: calc(100% + calc(${v.mdSpacing} * 2));
    border-collapse: collapse;
    margin: 0 -${v.mdSpacing};
    background: ${({ theme }) => theme.bg2};
`;

export const STableHead = styled.thead`
    background: ${({ theme }) => theme.bg3};
`;

export const STableHeadTR = styled.tr``;

export const STableHeadTH = styled.th``;

export const STableBody = styled.tbody``;

export const STableBodyTR = styled.tr`
    cursor: ${({ clickable }) => (clickable ? "pointer" : "initial")};
`;

export const STableBodyTD = styled.td`
    :first-of-type {
        width: 6rem;
    }
`;

export const SContentContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: ${v.smSpacing} ${v.mdSpacing};
`;

export const SContentSpanHead = styled.span`
    display: block;
    padding: ${v.smSpacing} ${v.mdSpacing};
    font-size: 16px;
    font-weight: 400;
    text-align: ${({ center }) => (center ? "center" : "left")};
`;
export const SContentSpan = styled.span`
    display: block;
    padding: ${v.mdSpacing} ${v.mdSpacing};
    font-size: 16px;
    font-weight: 400;
    background: ${({ theme }) => theme.bg2};
    text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const STableImageContainer = styled.div`
    position: relative;
    display: flex;
`;
export const STableImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SIconsContainer = styled.div``;
const iconStyles = css`
    font-size: 24px;
    display: block;
`;
export const SDeleteIcon = styled(AiOutlineDelete)`
    ${iconStyles}
    margin-bottom: ${v.mdSpacing};
`;
export const SEditIcon = styled(AiOutlineEdit)`
    ${iconStyles}
`;
