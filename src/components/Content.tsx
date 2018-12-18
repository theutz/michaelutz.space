import styled from '../lib/styled-components'
import { modularScale } from 'polished'

const Content = styled.div`
  padding: ${modularScale(1)};

  & * {
    color: ${({ theme }) => theme.colors.text.body.light};
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: ${({ theme }) => theme.colors.text.display.light};
  }

  & p,
  & ul,
  & ol {
    line-height: ${modularScale(2)};
  }

  & p {
    padding-bottom: ${modularScale(0)};
  }

  & li {
    margin-left: ${modularScale(0)};
    padding-left: ${modularScale(0)};
    margin-bottom: ${modularScale(0)};
  }
`

export default Content
