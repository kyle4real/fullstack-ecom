import styled, { css } from "styled-components";

import { v } from "../../styles/variables";

export const SInfoControl = styled.div`
    display: block;
    text-align: left;

    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }
`;

const labelStyles = css`
    display: block;
    font-weight: 500;
    font-size: 14px;
    padding-bottom: 4px;
`;
export const SInfoLabelSpan = styled.span`
    ${labelStyles}
`;
export const SInfoLabel = styled.label`
    ${labelStyles}
`;

export const SInfoSpan = styled.span`
    display: block;
    font-size: 16px;
`;
export const SInfoInput = styled.input``;
