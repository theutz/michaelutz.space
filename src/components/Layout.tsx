import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '../lib/styled-components'
import theme from '../theme'
import { SiteMetadata } from '../typescript/data'
import GlobalStyle from './GlobalStyle'
import styled from '../lib/styled-components'

const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { title, description } = data.site.siteMetadata as Pick<
          SiteMetadata,
          'title' | 'description'
        >
        return (
          <ThemeProvider theme={theme}>
            <>
              <Helmet>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <link
                  href="https://fonts.googleapis.com/css?family=Codystar|Raleway"
                  rel="stylesheet"
                />
                <title>{`${title}: A Personal Site`}</title>
              </Helmet>
              <GlobalStyle />
              <Container>{children}</Container>
            </>
          </ThemeProvider>
        )
      }}
    />
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.background.top},
    ${({ theme }) => theme.colors.background.bottom}
  );
`

const query = graphql`
  query Layout {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

interface Props {
  children: ReactNode
}

export default Layout
