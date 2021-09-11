import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SImageContainer = styled.div`
    background: ${({ theme }) => theme.primaryLighter};
    display: flex;
    align-items: center;
    flex: 1;
    padding: ${v.mdSpacing};
`;

export const SImage = styled.img`
    max-width: 100%;
    height: auto;
`;
