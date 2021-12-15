import styled, { css } from "styled-components";

import { v, b, s, btnReset } from "../../styles/variables";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { SInput } from "../UI/AuthForm/styles";

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

// card two /////////////////////////////////////////////////

export const SMediaGrid = styled.div`
    background: ${({ theme }) => theme.bg};
    padding: ${v.mdSpacing};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${v.smSpacing};

    @media ${b.sm} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${b.md} {
        grid-template-columns: repeat(5, 1fr);
    }
`;

export const SMainMediaContainer = styled.div`
    grid-row: 1 / 3;
    grid-column: 1 / 3;

    display: flex;
    position: relative;
`;

export const SMediaContainer = styled.div`
    display: flex;
    position: relative;
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

// card three /////////////////////////////////////////////////

export const STBodyTRVariant = styled.tr`
    background: ${({ theme }) => theme.bg};
`;

export const STDImage = styled.td`
    width: 1%;
`;

export const STDImageContainer = styled.div`
    width: 64px;
    display: flex;
    position: relative;
`;

export const SIconsContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const SIconButtonWrap = styled.button`
    ${btnReset};
    cursor: pointer;
    :first-of-type {
        margin-right: ${v.mdSpacing};
    }
`;
const iconStyles = css`
    font-size: 16px;
    display: block;
`;
export const SDeleteIcon = styled(AiOutlineDelete)`
    ${iconStyles}
`;
export const SEditIcon = styled(AiOutlineEdit)`
    ${iconStyles}
`;

export const SPriceInputContainer = styled.div`
    position: relative;
`;
export const SPriceInput = styled(SInput)`
    width: ${v.xxlSpacing};
    border: 1px solid ${({ theme }) => theme.bg3};
    padding-left: ${v.mdSpacing};
`;
export const SDollarSign = styled.div`
    position: absolute;
    left: ${v.smSpacing};
    top: 50%;
    font-size: 12px;
    transform: translate(-50%, -50%);
`;