import { get } from 'lodash/fp'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment SiteMetadata on Query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

type Selector = (
  data: any
) => Readonly<{
  title: string
  author: string
  description: string
}>

const getSiteMetadata = get('site.siteMetadata') as Selector

export default getSiteMetadata
