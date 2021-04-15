import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        min-height: 100vh;
        background-color: #385170;
    }
    h1, h2, h3, h4, h5, h6, p {
        font-size: 16px;
    }
`