import styled from "styled-components";

import { v, b } from "../../styles/variables";

export const SLayout = styled.div`
    position: relative;
`;

export const SMain = styled.div`
    min-height: calc(100vh - ${v.headerHeight});

    @media ${b.lg} {
        ${({ isAdminArea }) => {
            if (isAdminArea) {
                return `calc(100vh - ${v.headerHeight} + ${v.headerTopHeight})`;
            } else {
                return `calc(100vh - ${v.headerHeight} + ${v.headerTopHeight} + 5vh)`;
            }
        }}
    }
`;
