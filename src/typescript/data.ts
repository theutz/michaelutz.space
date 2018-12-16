export interface SiteMetadata {
  title: string
  description: string
  author: string
}

export interface Site {
  siteMetadata: SiteMetadata
}

export interface Data {
  site: Site
}

export default Data
