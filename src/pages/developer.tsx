import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
import MenuBar from '../components/MenuBar'

const DeveloperPage = () => (
  <StaticQuery
    query={graphql`
      query DeveloperPage {
        markdownRemark(
          fields: { sourceInstanceName: { eq: "markdown-pages" } }
          frontmatter: { title: { eq: "Developer" } }
        ) {
          html
        }
      }
    `}
    render={data => {
      const { html } = data.markdownRemark
      return (
        <Layout>
          <MenuBar />
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
      )
    }}
  />
)

export default DeveloperPage
