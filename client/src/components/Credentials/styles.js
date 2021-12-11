import styled, { css } from "styled-components";

import { v } from "../../styles/variables";

import { AiOutlineLock } from "react-icons/ai";

export const SCredentials = styled.div`
    display: flex;
    justify-content: center;
`;

export const STitle = styled.span`
    display: block;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 2.2px;
    margin-bottom: ${v.smSpacing};
`;

export const SCredentialsInfo = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    text-align: center;
    line-height: 100%;
`;

export const SLockIcon = styled(AiOutlineLock)`
    display: block;
    font-size: 2rem;
    margin: 0 auto;
    margin-bottom: ${v.smSpacing};
`;

export const SInfoControl = styled.div`
    display: block;
    text-align: left;

    padding-top: ${v.mdSpacing};
`;

const labelStyles = css`
    display: block;
    font-weight: 900;
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
    font-size: 18px;
`;
export const SInfoInput = styled.input``;
