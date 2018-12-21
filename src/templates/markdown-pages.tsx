import React from 'react'

import { graphql } from 'gatsby'
import Content from '../components/Content'
import Page from '../components/Page'

const Template: React.SFC<Props> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Page title={frontmatter.title}>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
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
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Template
