import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: #000000;
        color: #FFFFFF;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    *{
        box-sizing: border-box;
    }
`

export default GlobalStyle