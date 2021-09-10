import styled from "styled-components";

import { v, b, s } from "../../../styles/variables";

export const SCard = styled.div`
    padding: ${v.mdSpacing};
    background: ${({ theme, bg }) => (!bg ? theme.bg : theme[bg])};
    border: 1px solid ${({ theme }) => theme.primaryLighter};
    border-radius: 0;
    width: ${({ size }) => (!size ? "initial" : s[size])};

    @media ${b.sm} {
        border-radius: ${v.borderRadius};
    }
`;
