/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/markdown-pages.tsx`)

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
        edges {
          node {
            fields {
              sourceInstanceName
            }
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges
      .filter(({ node }) => node.fields.sourceInstanceName === 'markdown-pages')
      .forEach(({ node }) => {
        if (!node.frontmatter.path) {
          return
        }

        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {},
        })
      })
  })
}
