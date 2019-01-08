import React from 'react'

import styled from '../lib/styled-components'
import { graphql } from 'gatsby'
import Content from '../components/Content'
import { DateTime } from 'luxon'
import { modularScaleRem } from '../lib/polished-helpers'
import Page from '../components/Page'

const Template: React.SFC<Props> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Page title="Blog">
      <Dateline>
        {DateTime.fromISO(frontmatter.date).toLocaleString(DateTime.DATE_FULL)}
      </Dateline>
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
        date: string
        tags: string[]
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
        date
        title
        tags
      }
    }
  }
`

const Dateline = styled.h2`
  padding: 0 ${modularScaleRem(1)};
  margin: 0;
  text-align: right;
  color: ${props => props.theme.colors.moon};
  font-size: ${modularScaleRem(-1)};
`

export default Template
