import { normalize } from 'polished'
import { createGlobalStyle } from '../lib/styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
