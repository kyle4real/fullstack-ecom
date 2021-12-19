import styled from "styled-components";

import { v } from "../../../styles/variables";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const SAccordianContainer = styled.div`
    user-select: none;
    overflow: hidden;
    :first-child {
        border-top: 1px solid ${({ theme }) => theme.bg3};
    }
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
`;

export const SAccordianHead = styled.div`
    padding: ${v.mdSpacing};
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;
export const SAccordianTitle = styled.span`
    display: block;
    font-weight: 600;
    text-transform: uppercase;
`;
export const SPlusIcon = styled(AiOutlinePlus)`
    display: block;
    font-size: 16px;
`;
export const SMinusIcon = styled(AiOutlineMinus)`
    display: block;
    font-size: 16px;
`;

export const SAccordianContent = styled.div`
    padding: ${v.mdSpacing};
    padding-top: ${v.smSpacing};
`;

export const SContentSpan = styled.span`
    line-height: 1.4;
`;
