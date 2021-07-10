// const path = require( 'path' );
const createFrontPage = require('./src/create-pages/front-page')
const createOverMij = require('./src/create-pages/over-mij')
// const createBlogArchivePages = require('./src/create-pages/blog-archive')
// const createBlogDetail = require('./src/create-pages/blog-detail')
const createPages = require('./src/create-pages/pages')

// Create all pages.
exports.createPages = async ({ actions, graphql }) => {
  await createFrontPage({ actions, graphql })
  await createOverMij({ actions, graphql })
  // await createBlogArchivePages({ actions, graphql })
  // await createBlogDetail({ actions, graphql })
  await createPages({ actions, graphql })
}
