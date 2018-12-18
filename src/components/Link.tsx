import { Link as GatsbyLink } from 'gatsby'
import styled from '../lib/styled-components'

const Link = styled(GatsbyLink)`
  color: ${({ theme }) => theme.colors.text.link.light};
  text-decoration: none;
`

export default Link
