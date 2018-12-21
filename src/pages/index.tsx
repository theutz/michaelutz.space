import React from 'react'
import { StaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import { modularScale } from 'polished'
import Layout from '../components/Layout'
import styled from '../lib/styled-components'
import man from '../images/man.svg'
import moon from '../images/moon.svg'
import Link from '../components/Link'
import getPageLinks from '../lib/selectors/getPageLinks'
import getSiteMetadata from '../lib/selectors/getSiteMetadata'

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query HomeQuery {
          ...SiteMetadata
          ...PageLinks
        }
      `}
      render={data => {
        const { title } = getSiteMetadata(data)
        const links = getPageLinks(data)
        return (
          <Container>
            <Banner>{title}</Banner>
            <Moon>
              <img src={moon} />
            </Moon>
            <Links>
              {links.map(({ path, title }) => (
                <Item key={path}>
                  <Link to={path}>{title}</Link>
                </Item>
              ))}
            </Links>
            <Man>
              <img src={man} />
            </Man>
            <HillContainer>
              <Hill />
            </HillContainer>
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

const HillContainer = styled.div`
  position: fixed;
  display: flex;
  z-index: 5000;
  height: 40vh;
  bottom: -20vh;
`

const Hill = styled.div`
  border-radius: 50%;
  max-width: calc(960px / 2);
  width: 100vw;
  background: linear-gradient(
    ${({ theme }) => theme.colors.hill.top} -50%,
    ${({ theme }) => theme.colors.hill.middle} 20%,
    ${({ theme }) => theme.colors.hill.bottom} 100%
  );
`

const Links = styled.ul`
  padding-top: 50vh;
  list-style: none;
  text-align: center;
  padding-inline-start: 0;
  padding-bottom: ${modularScale(10)};
`

const Item = styled.li`
  font-size: ${modularScale(3)};
  margin-bottom: ${modularScale(0)};
`

export default IndexPage
