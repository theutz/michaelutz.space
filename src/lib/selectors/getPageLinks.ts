import { pipe, getOr, map, pick, concat, sortBy } from 'lodash/fp'
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

type Selector = (data: any) => ReadonlyArray<Readonly<Link>>

interface Link {
  title: string
  path: string
  order: number
}

export const getPageLinks = (pipe(
  getOr([], 'allMarkdownRemark.edges'),
  map(
    pipe(
      getOr({}, 'node.frontmatter'),
      pick(['title', 'path', 'order'])
    )
  ),
  links => {
    return [...links, { title: 'Home', path: '/', order: 0 }]
  },
  sortBy<Link>(x => x.order)
) as unknown) as Selector

export default getPageLinks
