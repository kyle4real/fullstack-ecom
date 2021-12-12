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
`;

export const SUnsavedChangedContent = styled.div`
    /* max-width: 1920px;
    margin: 0 auto;
    padding: 0 ${v.mdSpacing}; */
`;
