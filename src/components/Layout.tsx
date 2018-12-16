import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

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
          <>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, viewport-fit=cover"
              />
              <meta charSet="utf-8" />
              <meta name="description" content={description} />
              <title>{title}</title>
            </Helmet>
            {children}
          </>
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
