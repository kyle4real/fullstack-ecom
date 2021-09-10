import styled, { css } from "styled-components";

import { v } from "../../../../styles/variables";

import { AiOutlineClose, AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const SImageFocus = styled.div``;

export const STopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${v.mdSpacing};
`;

export const STitle = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 900;
`;

export const SButtonContainer = styled.div`
    display: flex;
`;

export const SIconContainer = styled.div`
    padding: ${v.smSpacing};
    border-radius: ${v.borderRadius};
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
    :not(:last-child) {
        margin-right: ${v.smSpacing};
    }

    :hover {
        background: ${({ theme }) => theme.bg};
    }
`;

export const SDeleteIcon = styled(AiOutlineDelete)`
    display: block;
    font-size: 2rem;
`;
export const SCloseIcon = styled(AiOutlineClose)`
    display: block;
    font-size: 2rem;
`;

export const SSliderContainer = styled.div`
    background: ${({ theme }) => theme.primary};
    width: calc(100% + ${v.mdSpacing} * 2 + 2px);
    margin: 0 calc(-${v.mdSpacing} - 1px);
    display: flex;
    justify-content: center;
`;

export const SSliderPanel = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`;

const arrowStyles = css`
    display: block;
    margin: auto 0;
    color: ${({ theme }) => theme.text};
    font-size: 3rem;
    cursor: pointer;
    :hover {
        color: ${({ theme }) => theme.primaryLighter};
    }
`;
export const SLeftIcon = styled(AiOutlineLeft)`
    ${arrowStyles}
`;
export const SRightIcon = styled(AiOutlineRight)`
    ${arrowStyles}
`;

export const SSliderCurrent = styled.div`
    padding: ${v.lgSpacing};
    width: calc(100% - 20%);
    display: flex;
    justify-content: center;

    overflow: hidden;
`;

export const SImageContainer = styled.div`
    display: flex;
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SBottomBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${v.mdSpacing};
`;

export const SIndex = styled.span`
    display: block;
    font-size: 24px;
    font-weight: 400;
`;
