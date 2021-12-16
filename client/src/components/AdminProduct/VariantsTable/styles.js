import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import styled, { css } from "styled-components";

import { btnReset, v } from "../../../styles/variables";

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
export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SIconsContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const SIconButtonWrap = styled.button`
    ${btnReset};
    width: ${v.mdSpacing};
    cursor: pointer;
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
