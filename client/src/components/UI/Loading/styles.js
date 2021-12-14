import styled from "styled-components";

import { v } from "../../../styles/variables";

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
