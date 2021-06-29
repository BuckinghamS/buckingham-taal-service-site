import React from 'react'
import { isEmpty } from 'lodash'
import { ERROR_MESSAGE } from '../../utils'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import LandingPage from '../../components/Landing'
import Hero from '../../components/Landing/Hero'
import Uspgrid from '../../components/Homepage/UspGrid'
import LatestBlog from '../../components/Blog/LatestBlog'

const PageTemplate = ({ data }) => {
  const {
    contentfulLandingPage: { internalName, hero, sections },
  } = data

  const USP_BLOCK_TITLE = 'Werkwijze'
  const UspGridData =
    sections && sections.filter((item) => item.name === USP_BLOCK_TITLE)
      ? sections.filter((item) => item.name === USP_BLOCK_TITLE)
      : null

  return (
    <Layout>
      {!isEmpty(data) ? (
        <>
          {hero && <Hero hero={hero} internalName={internalName} />}
          {sections && <LandingPage page={sections} />}
          {UspGridData && <Uspgrid content={UspGridData} />}
          <LatestBlog />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulLandingPage(id: { eq: $id }) {
      internalName
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
            title
            text {
              text
            }
          }
        }
      }
      hero {
        ... on ContentfulComponentHero {
          id
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          text {
            text
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
`

export default PageTemplate
