import { normalize } from 'polished'
import { createGlobalStyle } from '../lib/styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default GlobalStyle
