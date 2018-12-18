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
}

export interface MarkdownRemark {
  html: string
  fields: {
    sourceInstanceName: string
  }
  frontmatter: {
    title?: string
    path?: string
    order?: number
  }
}

export interface Data {
  site: Site
  sitePage: Page
  allSitePage: Collection<Page>
  markdownRemark: MarkdownRemark
  allMarkdownRemark: Collection<MarkdownRemark>
}

export default Data
