import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
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
    }
`;
