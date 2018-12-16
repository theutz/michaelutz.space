/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const {
  split,
  pipe,
  get,
  compact,
  join,
  replace,
  startCase,
} = require('lodash/fp')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    const title = pipe(
      get('path'),
      path =>
        path === '/'
          ? 'Home'
          : pipe(
              replace(/^\//, ''),
              replace(/\/$/, ''),
              split('-'),
              compact,
              join(' '),
              startCase
            )(path)
    )(page)

    const slug = pipe(
      get('path'),
      path => (path === '/' ? path : replace(/\/$/, '')(path))
    )(page)

    const menuOrder = title => {
      return ['Home', 'Developer', 'Designer', 'Writer', 'More'].reduce(
        (prev, curr, index) => ({ ...prev, [curr]: index })
      )[title]
    }

    createPage({
      ...page,
      context: { ...page.context, title, slug, menuOrder: menuOrder(title) },
    })
    resolve()
  })
}
