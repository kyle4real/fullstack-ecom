import styled from "styled-components";

import { v, b, s } from "./../../styles/variables";

export const SLayout = styled.div`
    /* display: flex;
    flex-direction: column; */
    display: block;
    /* overflow-y: auto; */
    height: 100%;
    position: relative;
`;
export const SPage = styled.div`
    transition: 0.3s ease padding;
    /* flex: 1; */
    padding: ${({ isProduct }) => (!isProduct ? v.mdSpacing : 0)};

    @media ${b.sm} {
        padding: ${v.lgSpacing};
    }

    @media ${b.lg} {
        margin: 0 auto;
        width: 100%;
        max-width: ${({ pageSize }) => (!pageSize ? s.lg : s[pageSize])};
    }
`;

export const SMobileWrapper = styled.div`
    display: block;
    @media ${b.sm} {
        display: none;
    }
`;

export const SDesktopWrapper = styled.div`
    display: none;
    @media ${b.sm} {
        display: block;
    }
`;
