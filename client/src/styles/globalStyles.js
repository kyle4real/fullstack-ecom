import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;

        .top-0 {
            top: 0;
            transition: .3s ease top;
        }
    }

    button {
        /* :disabled {
            background: ${({ theme }) => theme.bg3};
            border-color: ${({ theme }) => theme.bg3};

            
        }
        :disabled:hover {
            cursor: initial;
            background: ${({ theme }) => theme.bg3};
        } */
        
    }

    
`;
