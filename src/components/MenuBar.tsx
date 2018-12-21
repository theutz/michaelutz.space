import React, { ReactNode, SFC, useState } from 'react'

import { pipe, toNumber } from 'lodash/fp'
import posed, { PoseGroup } from 'react-pose'
import { modularScale, stripUnit } from 'polished'
import styled from '../lib/styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import getPageLinks from '../lib/selectors/getPageLinks'

const MenuBar: SFC<Props> = ({ children }) => {
  const [fullMoon, setFullMoon] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query MenuBarQuery {
          ...PageLinks
        }
      `}
      render={data => {
        const links = [{ title: 'Home', path: '/' }, ...getPageLinks(data)]
        return (
          <Container>
            <Moon onClick={() => setFullMoon(!fullMoon)} />
            <Title>{children}</Title>
            <PoseGroup animateOnMount={true}>
              {fullMoon ? (
                <FullMoonContainer
                  key="fullMoon"
                  onClick={() => setFullMoon(false)}
                >
                  <FullMoon>
                    <LinkContainer>
                      {links.map(({ path, title }) => (
                        <MenuLink key={path} to={path}>
                          {title}
                        </MenuLink>
                      ))}
                    </LinkContainer>
                  </FullMoon>
                </FullMoonContainer>
              ) : null}
            </PoseGroup>
          </Container>
        )
      }}
    />
  )
}

const LinkContainer = styled.menu`
  position: absolute;
  top: calc(50% + ${modularScale(0)});
  left: calc(50% + ${modularScale(0)});
  display: flex;
  flex-flow: column nowrap;
  font-size: ${modularScale(3)};
`

const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.link.dark};
  margin-bottom: ${modularScale(0)};
`

const Container = styled.header`
  padding: ${modularScale(0)};
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  margin-left: auto;
  color: ${props => props.theme.colors.text.display.light};
`

const FullMoonContainer = styled(
  posed.div({ front: { zIndex: 500 }, back: { zIndex: -500 } })
)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
`

const fullMoonSize = 15
const halfSize = pipe(
  modularScale,
  stripUnit,
  toNumber,
  x => x / 2,
  x => `${x}em`
)
const FullMoon = styled(
  posed.div({
    enter: {
      scale: 1,
      transition: { scale: { duration: 250, ease: 'easeOut' } },
    },
    exit: {
      scale: 0,
      transition: { scale: { duration: 250, ease: 'easeOut' } },
    },
  })
)`
  position: absolute;
  top: -${halfSize(fullMoonSize)};
  left: -${halfSize(fullMoonSize)};
  width: ${modularScale(fullMoonSize)};
  height: ${modularScale(fullMoonSize)};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.moon};
`

const Moon = styled(
  posed.button({ pressable: true, init: { scale: 1 }, press: { scale: 0.8 } })
)`
  background-color: ${props => props.theme.colors.moon};
  width: ${modularScale(3)};
  height: ${modularScale(3)};
  border-radius: 50%;
  border: none;
`

interface Props {
  children: ReactNode
}

export default MenuBar
