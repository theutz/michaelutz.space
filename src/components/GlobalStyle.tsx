import { normalize } from 'polished'
import { createGlobalStyle } from '../lib/styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: 16px;
    overflow: hidden;
    height: 100%;
  }

  body {
    height: 100%;
    overflow: auto;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
