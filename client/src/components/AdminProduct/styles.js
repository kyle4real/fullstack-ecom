import styled, { css } from "styled-components";

import { v, b, s } from "../../styles/variables";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

// POPUP /////////////////////////////////////////////////
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

export const SProductDisplayGrid = styled.div`
    display: grid;
    gap: ${v.mdSpacing};

    @media ${b.lg} {
        grid-template-columns: 625px 1fr;
    }

    > div {
        > div {
            :not(:last-of-type) {
                margin-bottom: ${v.mdSpacing};
            }
        }
    }
`;

// card one /////////////////////////////////////////////////
export const SFormControl = styled.div`
    :not(:last-child) {
        margin-bottom: calc(${v.mdSpacing} + ${v.smSpacing});
    }
`;

const labelStyles = css`
    display: block;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
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
    border: 1px solid ${({ theme }) => theme.bg3};
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

export const SMedia = styled.div`
    background: ${({ theme }) => theme.bg};
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
    background: ${({ theme }) => theme.bgOverlay};
    cursor: pointer;
    opacity: ${({ active }) => (!active ? 0 : 1)};

    :hover {
        opacity: 1;
        transition: 0.2s ease;
    }
`;

export const SMainImageContainer = styled.div`
    height: 100%;
    width: auto;
    margin: 0 auto;
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

export const SMediaBottomBar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${v.mdSpacing};

    button {
        margin-left: ${v.smSpacing};
    }
`;

export const SIMAGEInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 100;
    top: 0;
    right: 0;
`;

// card three /////////////////////////////////////////////////
export const SVariantsContainer = styled.div``;

export const SVariantsHead = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: ${v.mdSpacing};
`;

export const STable = styled.table`
    width: calc(100% + calc(${v.mdSpacing} * 2 + 2px));
    border-collapse: collapse;
    margin: 0 calc(-${v.mdSpacing} - 1px);
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
