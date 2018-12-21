import React from 'react'

import styled from 'styled-components'
import { StaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import Layout from '../components/Layout'
import MenuBar from '../components/MenuBar'
import { pipe, get, map, pick, flatten } from 'lodash/fp'
import { modularScaleRem } from '../lib/polished-helpers'
import Content from '../components/Content'
import Page from '../components/Page'
import { DateTime } from 'luxon'

const Blog = () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
          filter: { fields: { sourceInstanceName: { eq: "blog" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      const links = pipe(
        get('allMarkdownRemark.edges'),
        map(
          pipe(
            get('node'),
            ({ frontmatter, fields }) => {
              const { title, date } = frontmatter
              const { slug } = fields
              return { title, slug, date }
            }
          )
        )
      )(data)
      return (
        <Page title="Blog">
          <List>
            {links.map(({ title, slug, date }) => (
              <Item key={slug}>
                <Dateline>
                  {DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}
                </Dateline>
                <Link to={slug}>{title}</Link>
              </Item>
            ))}
          </List>
        </Page>
      )
    }}
  />
)

const List = styled.ul`
  font-size: ${modularScaleRem(-1)};
`

const Dateline = styled.div`
  color: ${props => props.theme.colors.moon};
`

const Item = styled.li`
  text-align: center;
  margin-bottom: ${modularScaleRem(2)};
`

const Link = styled(GatsbyLink)`
  color: ${props => props.theme.colors.text.link.light};
  text-decoration: none;
  font-size: ${modularScaleRem(1)};
`

export default Blog
