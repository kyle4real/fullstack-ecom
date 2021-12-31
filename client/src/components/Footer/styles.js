import styled from "styled-components";

import { v } from "../../styles/variables";

export const SFooter = styled.div`
    box-shadow: inset 0 1px ${({ theme }) => theme.bg3};
    background: ${({ theme }) => theme.bg};
`;
