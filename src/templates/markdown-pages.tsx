import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
import MenuBar from '../components/MenuBar'

const Template: React.SFC<Props> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        path: string
      }
    }
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Template
