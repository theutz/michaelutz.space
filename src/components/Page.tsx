import React, { SFC, ReactNode } from 'react'

import Container from './Container'
import MenuBar from './MenuBar'
import Layout from './Layout'

export const Page: SFC<Props> = ({ children, title }) => (
  <Layout>
    <Container>
      <MenuBar>{title}</MenuBar>
      {children}
    </Container>
  </Layout>
)

interface Props {
  children: ReactNode
  title: string
}

export default Page
