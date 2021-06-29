const { slash } = require(`gatsby-core-utils`)
const overMijPageTemplate = require.resolve(`../templates/over-mij/index.js`)

// Get all the front page data.
const GET_OVER_MIJ_PAGE = `
query GET_OVER_MIJ_PAGE {
  page: contentfulLandingPage(internalName: {eq: "Over mij"}) {
    id
    internalName
    slug
    sections {
      columns {
        ... on ContentfulComponentText {
          id
          title
          text {
            text
          }
        }
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
      }
    }
    hero {
      ... on ContentfulComponentHero {
        id
        text {
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
    }
  }
}
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async () => {
    // Do query to get over mij page data.
    return await graphql(GET_OVER_MIJ_PAGE).then(({ data }) => {
      const { page } = data

      return { page }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page }) => {
    createPage({
      path:
        page.slug !== null || undefined
          ? page.slug
          : page.internalName.split(' ').join('-').toLowerCase(),
      component: slash(overMijPageTemplate),
      context: {
        page,
      },
    })
  })
}
