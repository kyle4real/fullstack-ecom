import styled from "styled-components";

import { v } from "../../styles/variables";

export const SCollection = styled.div`
    > div {
        :not(:last-of-type) {
            margin-bottom: ${v.mdSpacing};
        }
    }
`;
