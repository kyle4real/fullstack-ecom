import styled from "styled-components";

import { v, b } from "../../styles/variables";

export const SProductDisplayGrid = styled.div`
    display: grid;
    gap: ${v.mdSpacing};

    @media ${b.lg} {
        grid-template-columns: 625px 1fr;
    }

    > div {
        > div {
            :not(:last-of-type) {
                margin-bottom: ${v.mdSpacing};
            }
        }
    }
`;

export const SPriceInputGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${v.mdSpacing};

    input {
        width: 100%;
    }
`;
