import styled from "styled-components";

import { v, b, s, loadingBG } from "../../../styles/variables";

export const SPageLayout = styled.div``;

export const SPage = styled.div`
    min-width: ${({ minWidth }) => (!minWidth ? "initial" : s[minWidth])};

    transition: 0.3s ease padding;
    padding: ${v.mdSpacing} ${v.mdSpacing};

    @media ${b.sm} {
        padding: ${v.lgSpacing} ${v.mdSpacing};
    }

    @media ${b.lg} {
        padding: ${v.lgSpacing};
        margin: 0 auto;
        width: 100%;
        max-width: ${({ customSize }) =>
            !customSize ? s.lg : customSize === "fill" ? "initial" : s[customSize]};
    }

    .unsaved-changes-content {
        max-width: ${({ customSize }) =>
            !customSize ? s.lg : customSize === "fill" ? "initial" : s[customSize]};

        transition: 0.3s ease padding;
        padding: 0 ${v.mdSpacing};

        @media ${b.md} {
            margin-left: 225px;
        }
        @media ${b.lg} {
            padding: 0 ${v.lgSpacing};
        }
    }
`;

export const SPageLoad = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: ${v.borderRadius};

    ${loadingBG};
`;

export const SErrorMessage = styled.span`
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.red};
`;
