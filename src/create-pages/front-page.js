const { slash } = require(`gatsby-core-utils`)
const frontPageTemplate = require.resolve(`../templates/front-page/index.js`)
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  page:
  contentfulLandingPage(slug: {eq: "frontpage"}) {
    internalName
    hero {
      childContentfulComponentHeroTextTextNode {
        text
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    sections {
      name
      columns {
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
          text {
            text
          }
        }
      }
    }
  }
}
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async () => {
    // Do query to get home page data.
    return await graphql(GET_FRONT_PAGE).then(({ data }) => {
      const { page } = data

      return { page }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page }) => {
    createPage({
      path: `/`,
      component: slash(frontPageTemplate),
      context: {
        page,
      },
    })
  })
}
