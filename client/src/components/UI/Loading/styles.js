import styled from "styled-components";

import { loadingBG, v } from "../../../styles/variables";

export const SLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${v.smSpacing};
`;

export const SSpinner = styled.div`
    display: block;
    width: ${v.mdSpacing};
    height: ${v.mdSpacing};
    border: 3px solid ${({ theme, colorOne }) => (!colorOne ? theme.overlay : theme[colorOne])};
    border-radius: 50%;
    border-top-color: ${({ theme, colorTwo }) => (!colorTwo ? theme.bg2 : theme[colorTwo])};
    animation: spin 1s ease infinite;
    -webkit-animation: spin 1s ease infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;

export const SLoadBar = styled.div`
    height: 16px;
    width: 100%;
    ${loadingBG};
`;

// SPAN LOAD
export const SSpanLoadContainer = styled.div`
    position: relative;
    width: auto;
`;
export const SSpan = styled.span`
    visibility: ${({ loading }) => (!loading ? "initial" : "hidden")};
`;
