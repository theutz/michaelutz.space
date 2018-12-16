import React from 'react'
import { StaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import { modularScale } from 'polished'
import Layout from '../components/Layout'
import styled from '../lib/styled-components'
import { SiteMetadata } from '../typescript/data'
import man from '../images/man.svg'
import moon from '../images/moon.svg'
import Link from '../components/Link'

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
          <Container>
            <Banner>{title}</Banner>
            <Moon>
              <img src={moon} />
            </Moon>
            <Links>
              <Item>
                <Link to={'/developer'}>Developer</Link>
              </Item>
              <Item>
                <Link to={'/designer'}>Designer</Link>
              </Item>
            </Links>
            <Hill />
            <Man>
              <img src={man} />
            </Man>
          </Container>
        )
      }}
    />
  </Layout>
)

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`

const Banner = styled.h1`
  margin: 0;
  text-align: center;
  letter-spacing: ${modularScale(-8)};
  padding: ${modularScale(2)} 0;
  font-size: ${modularScale(4)};
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.moon};
`

const Moon = styled.div`
  width: ${modularScale(4)};
  height: ${modularScale(4)};
  border-radius: 50%;
  margin: ${modularScale(3)} 0;
  background-color: ${({ theme }) => theme.colors.moon};
`

const Man = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 19vh;

  & > img {
    height: ${modularScale(4)};
  }
`

const Hill = styled.div`
  position: fixed;
  z-index: 5000;
  top: 80vh;
  bottom: -20vh;
  left: -10vh;
  right: -10vh;
  background: red;
  border-radius: 50%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.hill.top} -50vh,
    ${({ theme }) => theme.colors.hill.middle} 50%,
    ${({ theme }) => theme.colors.hill.bottom} 100%
  );
`

const Links = styled.ul`
  padding-top: ${modularScale(8)};
  list-style: none;
  text-align: center;
  padding-inline-start: 0;
  padding-bottom: ${modularScale(9)};
`

const Item = styled.li`
  font-size: ${modularScale(3)};
  margin-bottom: ${modularScale(0)};
`

export default IndexPage
