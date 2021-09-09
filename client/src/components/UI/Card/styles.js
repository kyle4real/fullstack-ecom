import styled from "styled-components";

import { v, b } from "../../../styles/variables";

export const SCard = styled.div`
    padding: ${v.mdSpacing};
    background: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.primaryLighter};
    border-radius: 0;

    @media ${b.sm} {
        border-radius: ${v.borderRadius};
    }
`;
