import styled from "styled-components";

import { v, b } from "../../../styles/variables";

export const SUnsavedChanges = styled.div`
    position: fixed;
    z-index: 1000;
    width: 100%;
    background: ${({ theme }) => theme.bg};
    left: 0;
    right: 0;
    top: -${v.headerHeight};
    height: ${v.headerHeight};
    @media ${b.lg} {
        top: calc(-${v.headerHeight} - ${v.headerTopHeight});
        height: calc(${v.headerTopHeight} + ${v.headerHeight});
    }

    box-shadow: inset 0 -1px ${({ theme }) => theme.bg3};
`;

export const SUnsavedChangedContent = styled.div`
    max-width: 1920px;
    padding: ${v.mdSpacing};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

export const SUnsavedChangesTitle = styled.span`
    font-weight: 600;
    font-size: 18px;

    @media ${b.sm} {
        font-size: 24px;
    }
`;

export const SButtonContainer = styled.div`
    display: flex;
    align-items: center;
    > button {
        :not(:last-of-type) {
            margin-right: ${v.smSpacing};
        }
    }
`;
