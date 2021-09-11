import styled from "styled-components";

import { v, s, b } from "../../styles/variables";

export const SPageHead = styled.div`
    background: ${({ theme }) => theme.bg3};
    /* color: ${({ theme }) => theme.text}; */
`;

export const SPageHeadContent = styled.div`
    margin: 0 auto;
    line-height: 100%;
    text-align: center;
    padding: ${v.lgSpacing} ${v.lgSpacing};

    @media ${b.md} {
        text-align: left;
    }

    @media ${b.lg} {
        width: ${s.lg};
        padding: ${v.xlSpacing} ${v.mdSpacing};
    }
`;

export const STagline = styled.span`
    display: block;
    font-size: 15px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: calc(${v.smSpacing} + 4px);

    @media ${b.md} {
        margin-bottom: ${v.mdSpacing};
    }
`;
export const SCollection = styled.span`
    display: block;
    font-size: 36px;
    font-weight: 900;
    margin-bottom: ${v.mdSpacing};
    text-transform: uppercase;

    @media ${b.md} {
        margin-bottom: ${v.lgSpacing};
    }
`;
export const SDescription = styled.span`
    display: none;
    color: ${({ theme }) => theme.primaryLight};

    @media ${b.md} {
        display: block;
    }
`;
