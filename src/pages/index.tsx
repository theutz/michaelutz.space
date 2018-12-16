import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from '../lib/styled-components'
import { SiteMetadata } from '../typescript/data'

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query homeQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        const { title } = data.site.siteMetadata as Pick<SiteMetadata, 'title'>
        return (
          <>
            <Banner>{title}</Banner>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
          </>
        )
      }}
    />
  </Layout>
)

const Banner = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
`

export default IndexPage
