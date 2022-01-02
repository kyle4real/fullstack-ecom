import styled from "styled-components";

import { v } from "./../../styles/variables";

export const SButtonControl = styled.div`
    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }
`;
