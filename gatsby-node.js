/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const pathMod = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const {
  get,
  filter,
  pipe,
  first,
  forEach,
  map,
  kebabCase,
  pick,
} = require('lodash/fp')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const field = { node, name: `slug` }

    if (node.fields.sourceInstanceName === 'markdown-pages') {
      field.value = createFilePath({
        node,
        getNode,
        basePath: `pages`,
      }).replace(/\/$/, '')
    }

    if (node.fields.sourceInstanceName === 'blog') {
      field.value = `/blog/${node.frontmatter.date}-${kebabCase(
        node.frontmatter.title
      )}`
    }

    if (!field.value) {
      throw new Error('No value was provided for node field.')
    }

    createNodeField(field)
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const markdownPagesTemplate = pathMod.resolve(
    `src/templates/markdown-pages.tsx`
  )
  const blogTemplate = pathMod.resolve(`src/templates/blog.tsx`)

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
        edges {
          node {
            fields {
              sourceInstanceName
            }
            headings {
              value
            }
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const getPages = get('data.allMarkdownRemark.edges')
    const filterGroup = group =>
      filter(edge => edge.node.fields.sourceInstanceName === group)
    const getPath = map(get('node.frontmatter.path'))

    pipe(
      getPages,
      filterGroup('markdown-pages'),
      getPath,
      forEach(
        path => path && createPage({ path, component: markdownPagesTemplate })
      )
    )(result)

    pipe(
      getPages,
      filterGroup('blog'),
      map(
        pipe(
          get('node'),
          pick(['frontmatter', 'headings'])
        )
      ),
      forEach(({ frontmatter, headings }) => {
        const { date } = frontmatter
        const path = pipe(
          first,
          get('value'),
          kebabCase,
          title => `/blog/${date}-${title}`
        )(headings)

        path && createPage({ path, component: blogTemplate })
      })
    )(result)
  })
}
