import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.primary};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }

    button {
        :disabled {
            background: ${({ theme }) => theme.bg3};
            border-color: ${({ theme }) => theme.bg3};

            
        }
        :disabled:hover {
            cursor: initial;
            background: ${({ theme }) => theme.bg3};
        }
        
    }
`;
