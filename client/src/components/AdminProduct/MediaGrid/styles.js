import styled from "styled-components";

import { v, b } from "../../../styles/variables";

export const SMediaGrid = styled.div`
    background: ${({ theme }) => theme.bg};
    padding: ${v.mdSpacing};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${v.smSpacing};

    @media ${b.sm} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${b.md} {
        grid-template-columns: repeat(5, 1fr);
    }
`;

export const SMainMediaContainer = styled.div`
    grid-row: 1 / 3;
    grid-column: 1 / 3;

    display: flex;
    position: relative;
`;

export const SMediaContainer = styled.div`
    display: flex;
    position: relative;
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SMediaBottomBar = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${v.mdSpacing};

    button {
        margin-left: ${v.smSpacing};
    }
`;

export const STempPosDis = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 26px;
    font-weight: 900;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`;
