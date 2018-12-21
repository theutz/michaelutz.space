import { pipe, getOr, map, pick, get } from 'lodash/fp'
import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment PageLinks on Query {
    allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___order }
      filter: { fields: { sourceInstanceName: { eq: "markdown-pages" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            order
            path
          }
        }
      }
    }
  }
`

type Selector = (data: any) => ReadonlyArray<{ title: string; path: string }>

export const getPageLinks = (pipe(
  getOr([], 'allMarkdownRemark.edges'),
  map(
    pipe(
      getOr({}, 'node.frontmatter'),
      pick(['title', 'path'])
    )
  )
) as unknown) as Selector

export default getPageLinks
