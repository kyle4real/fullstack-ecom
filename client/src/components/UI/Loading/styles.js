import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SLoading = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ margin }) => (margin === 0 ? margin : v.xlSpacing)};
`;

export const SSpinner = styled.div`
    margin: auto 0;
    display: inline-block;
    width: ${({ fixed, size }) => (size ? size : fixed ? "50px" : "100%")};
    height: ${({ fixed, size }) => (size ? size : fixed ? "50px" : "100%")};
    border: 3px solid ${({ theme }) => theme.primaryLighter};
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.primary};
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
