import React, { ReactNode, SFC } from 'react'

import { modularScale } from 'polished'
import styled from '../lib/styled-components'

const MenuBar: SFC<Props> = ({ children }) => (
  <Container>
    <Moon />
    <Title>{children}</Title>
  </Container>
)

const Container = styled.header`
  padding: ${modularScale(0)};
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  margin-left: auto;
  color: ${props => props.theme.colors.text.display.light};
`

const Moon = styled.button`
  background-color: ${props => props.theme.colors.moon};
  width: ${modularScale(3)};
  height: ${modularScale(3)};
  border-radius: 50%;
`

interface Props {
  children: ReactNode
}

export default MenuBar
