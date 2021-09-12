import styled from "styled-components";

import { v, b, s } from "./../../styles/variables";

export const SLayout = styled.div`
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    /* overflow-y: auto; */
`;
export const SPage = styled.div`
    flex: 1;
    padding: ${v.lgSpacing} 0;

    @media ${b.sm} {
        padding: ${v.lgSpacing};
    }

    @media ${b.lg} {
        margin: 0 auto;
        width: 100%;
        max-width: ${({ size }) => (!size ? s.lg : s[size])};
    }
`;
