module.exports = {
  siteMetadata: {
    title: 'Michael Utz',
    description:
      'A personal site about a developer who likes working with code and people.',
    author: 'Michael Utz <michael@theutz.com>',
  },
  plugins: [
    `gatsby-plugin-favicon`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: `${__dirname}/src/markdown/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-source-instance-name-for-remark`,
  ],
}
