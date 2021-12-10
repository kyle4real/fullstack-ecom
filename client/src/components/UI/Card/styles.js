import styled from "styled-components";

import { v, b, s } from "../../../styles/variables";

export const SCard = styled.div`
    padding: ${v.mdSpacing};
    background: ${({ theme, bg }) => (!bg ? theme.bg : theme[bg])};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: 0;
    width: ${({ size }) => (!size ? "initial" : s[size])};
    box-shadow: ${v.cardBoxShadow};

    @media ${b.sm} {
        border-radius: ${v.borderRadius};
    }
`;
