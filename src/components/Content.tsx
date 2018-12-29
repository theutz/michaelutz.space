import styled from '../lib/styled-components'
import { modularScale, darken, saturate } from 'polished'
import { modularScaleRem } from '../lib/polished-helpers'
import { pipe } from 'lodash/fp'

const Content = styled.div`
  padding: ${modularScaleRem(1)};

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

    & .emoji-icon {
      width: 40px;
      position: relative;
      top: 8px;
      margin-top: -8px;
    }
  }

  & p,
  & ul,
  & ol {
    line-height: ${modularScaleRem(2)};

    & .emoji-icon {
      width: 25px;
      position: relative;
      top: 6px;
      margin-top: -6px;
    }
  }

  & p {
    padding-bottom: ${modularScaleRem(0)};
  }

  & li {
    margin-left: ${modularScaleRem(0)};
    padding-left: ${modularScaleRem(0)};
    margin-bottom: ${modularScaleRem(0)};
  }
`

export default Content
