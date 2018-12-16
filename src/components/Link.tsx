import { Link as GatsbyLink } from 'gatsby'
import styled from '../lib/styled-components'

const Link = styled(GatsbyLink).attrs<Attrs>({
  isDark: (props: Attrs) => props.isDark,
})`
  color: ${({ theme, ...props }) =>
    theme.colors.text.link[
      // @ts-ignore
      props.isDark ? 'dark' : 'light'
    ]};
  text-decoration: none;
`

interface Attrs {
  isDark: boolean
}

export default Link
