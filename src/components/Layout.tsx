import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '../lib/styled-components'
import theme from '../theme'
import GlobalStyle from './GlobalStyle'

const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: LayoutQuery) => {
        const { title, description } = data.site.siteMetadata
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
              {children}
            </>
          </ThemeProvider>
        )
      }}
    />
  )
}

interface LayoutQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

interface Props {
  children: ReactNode
}

export default Layout
