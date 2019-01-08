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
import { transparentize } from 'polished'
import media from 'styled-media-query'

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
                tags
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
              const { title, date, tags } = frontmatter
              const { slug } = fields
              return { title, slug, date, tags }
            }
          )
        )
      )(data)

      return (
        <Page title="Blog">
          {links.length < 1 ? (
            <NoPosts>No blog posts yet.</NoPosts>
          ) : (
            <List>
              {links.map(({ title, slug, date, tags }) => (
                <Item key={slug}>
                  <Dateline>
                    {DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}
                  </Dateline>
                  <Link to={slug}>{title}</Link>
                  {!!tags && (
                    <Tags>
                      {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </Tags>
                  )}
                </Item>
              ))}
            </List>
          )}
        </Page>
      )
    }}
  />
)

const NoPosts = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.text.display.light};
`

const List = styled.ul`
  display: grid;
  grid-row-gap: ${modularScaleRem(3)};
  font-size: ${modularScaleRem(-1)};
  margin: ${modularScaleRem(2)};
`

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: ${modularScaleRem(0)};
  align-items: center;

  ${media.greaterThan('small')`
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 0.5fr 1fr;
    grid-template-rows: auto;
  `};
`

const Dateline = styled.div`
  color: ${props => props.theme.colors.moon};
  order: 1;

  ${media.greaterThan('small')`
    order: 2;
    justify-self: end;
  `}

  ${media.greaterThan('medium')`
    justify-self: start;
  `}
`

const Link = styled(GatsbyLink)`
  color: ${props => props.theme.colors.text.link.light};
  text-decoration: none;
  font-size: ${modularScaleRem(1)};
  order: 2;

  ${media.greaterThan('small')`
    order: 1;
  `}
`

const Tags = styled.div`
  order: 3;

  ${media.greaterThan('small')`
  `}
`

const Tag = styled.span`
  color: ${props => props.theme.colors.text.body.light};
  font-style: italic;
  padding-right: ${modularScaleRem(-2)};

  &:last-child {
    border-right: none;
  }
`

export default Blog
