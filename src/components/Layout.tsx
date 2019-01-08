import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '../lib/styled-components'
import theme from '../theme'
import GlobalStyle from './GlobalStyle'
import styled from '../lib/styled-components'
import getSiteMetadata from '../lib/selectors/getSiteMetadata'
import { modularScaleRem } from '../lib/polished-helpers'

const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          ...SiteMetadata
        }
      `}
      render={data => {
        const { title, description } = getSiteMetadata(data)
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    ${({ theme }) => theme.colors.background.top},
    ${({ theme }) => theme.colors.background.bottom}
  );
`

interface Props {
  children: ReactNode
}

export default Layout
