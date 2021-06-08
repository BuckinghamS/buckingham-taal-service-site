const { slash } = require(`gatsby-core-utils`)
const blogArchiveTemplate = require.resolve(
  `../templates/blog-archive/index.js`
)
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the blog page data.
const GET_BLOG_PAGE = `
query GET_BLOG_PAGE {
  posts:   allContentfulBlogArticle(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        title
        content {
          ... on ContentfulComponentImage {
            id
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on ContentfulComponentText {
            id
            title
            text {
              text
            }
          }
        }
        category {
          title
        }
      }
    }
  }
  categories: allContentfulCategory {
    edges {
      node {
        title
      }
    }
  }
}

`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async () => {
    // Do query to get blog page data.
    return await graphql(GET_BLOG_PAGE).then(({ data }) => {
      const { page, posts, categories } = data

      let allThePosts = []
      posts &&
        posts.edges.map((post) => {
          allThePosts.push(post)
        })
      return { page: page, allPosts: allThePosts, categories: categories }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page, allPosts, categories }) => {
    createPage({
      path: `/blog/`,
      component: slash(blogArchiveTemplate),
      context: {
        page,
        allPosts,
        categories,
      },
    })
  })
}
