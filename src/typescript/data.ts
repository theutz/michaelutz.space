type Collection<T> = {
  edges: Array<{ node: T }>
}
export interface SiteMetadata {
  title: string
  description: string
  author: string
}

export interface Site {
  siteMetadata: SiteMetadata
}

export interface Page {
  path: string
  context: {
    title: string
    slug: string
    menuOrder: number | null
  }
}

export interface Data {
  site: Site
  sitePage: Page
  allSitePage: Collection<Page>
}

export default Data
