import styled from "styled-components";

import { v } from "../../../../styles/variables";
import { SInput } from "../styles";

export const SPriceInputContainer = styled.div`
    position: relative;
`;

export const SPriceInput = styled(SInput)`
    width: ${v.xxlSpacing};
    border: 1px solid ${({ theme }) => theme.bg3};
    padding-left: ${v.mdSpacing};
`;
export const SDollarSign = styled.div`
    position: absolute;
    left: ${v.smSpacing};
    top: 50%;
    font-size: 12px;
    transform: translate(-50%, -50%);
`;
