import styled from '../lib/styled-components'
import { modularScaleRem } from '../lib/polished-helpers'

const Container = styled.div`
  padding: ${modularScaleRem(0)};
  max-width: 960px;
  width: 100%;
`

export default Container
