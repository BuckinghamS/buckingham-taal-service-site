const { slash } = require(`gatsby-core-utils`)
const blogDetailTemplate = require.resolve(`../templates/blog-detail/index.js`)

// Get all the product data.
const GET_ALL_BLOG_PAGES = `
query GET_ALL_BLOG_PAGES {
  posts: allContentfulBlogArticle {
    edges {
      node {
        id
        title
      }
    }
  }
}
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async () => {
    // Do query to get product data.
    return await graphql(GET_ALL_BLOG_PAGES).then(({ data }) => {
      const { posts } = data

      let allThePosts = []
      posts &&
        posts.edges.map((post) => {
          allThePosts.push(post)
        })

      return { allPosts: allThePosts }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ allPosts }) => {
    allPosts.length &&
      allPosts.forEach((post) => {
        createPage({
          path: `/blog/${post.node.title.split(' ').join('-').toLowerCase()}`,
          component: slash(blogDetailTemplate),
          context: { id: post.node.id, title: post.node.title },
        })
      })
  })
}
