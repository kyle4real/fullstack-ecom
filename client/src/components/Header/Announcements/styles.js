import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled, { css } from "styled-components";

import { v, b, s } from "../../../styles/variables";

// ANNOUNCEMENTS ////////////////////////////////////////////////

export const SHeaderAnnouncements = styled.div`
    position: absolute;
    bottom: 0;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bg2};
    height: 5vh;
    /* padding-top: calc(${v.headerHeight} + ${v.headerTopHeight}); */
    justify-content: center;
    width: 100%;

    display: none;
    @media ${b.lg} {
        display: flex;
    }
`;

export const SAnnouncementContent = styled.div`
    height: 100%;
    display: block;
    width: ${s.md};
    text-align: center;
    display: flex;
    align-items: center;
`;

export const SAnnouncementSpanContainer = styled.div`
    flex: 1;
    overflow: hidden;
    position: relative;
    height: 100%;
    margin: 0 ${v.mdSpacing};
`;

export const SAnnouncementSpan = styled.span`
    line-height: 100%;
    display: block;
    position: absolute;
    top: calc(50% - 6px);
    width: 100%;
    font-size: 13.5px;
    font-weight: 400;
    transition: right 0.4s ease-out;
`;

const arrowStyles = css`
    display: block;
    font-size: 1rem;
    cursor: pointer;
`;
export const SLeftIcon = styled(AiOutlineLeft)`
    ${arrowStyles}
`;
export const SRightIcon = styled(AiOutlineRight)`
    ${arrowStyles}
`;
