import styled, { css } from "styled-components";

import { v, b, btnReset } from "../../../styles/variables";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const SPagination = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    line-height: 100%;

    margin: ${v.xxlSpacing} 0;
`;
export const SPaginationNumber = styled.li``;
export const SPaginationButton = styled.button`
    ${btnReset};
    padding: ${v.smSpacing} 0;
    display: flex;
    width: 32px;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 16px;
    color: ${({ theme, active }) => (!active ? theme.text : theme.primary)};
    cursor: ${({ dots }) => (dots ? "initial" : "pointer")};
    line-height: 100%;
    box-shadow: ${({ theme, active }) => (active ? `inset 0 -1px 0 ${theme.primary}` : "none")};

    @media ${b.md} {
        padding: ${v.smSpacing} 0;
        font-size: 16px;
    }
`;

export const SPaginationArrow = styled.button`
    ${btnReset};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.smSpacing} ${v.mdSpacing};
    cursor: pointer;
    color: ${({ theme }) => theme.text2};
    border: 1px solid ${({ theme }) => theme.bg3};
    background: ${({ theme }) => theme.bg};
    :disabled {
        cursor: initial;
        color: ${({ theme }) => theme.textFade};
        :hover {
            background: ${({ theme }) => theme.bg};
        }
    }
    :first-of-type {
        margin-right: ${v.mdSpacing};
    }
    :last-of-type {
        margin-left: ${v.mdSpacing};
    }

    :hover {
        background: ${({ theme }) => theme.bg3};
    }
`;

const iconStyle = css`
    font-size: 16px;
    color: inherit;

    @media ${b.md} {
        font-size: 12px;
    }
`;
export const SArrowLeft = styled(AiOutlineLeft)`
    ${iconStyle}
`;

export const SArrowRight = styled(AiOutlineRight)`
    ${iconStyle}
`;
