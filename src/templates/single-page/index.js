import React from 'react'
import { isEmpty } from 'lodash'
import { ERROR_MESSAGE } from '../../utils'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import LandingPage from '../../components/Landing'
import Hero from '../../components/Landing/Hero'

const PageTemplate = ({ data }) => {
  const {
    contentfulLandingPage: { internalName, hero, sections },
  } = data

  return (
    <Layout>
      {!isEmpty(data) ? (
        <>
          <Hero hero={hero} internalName={internalName}/>
          <LandingPage page={sections} />
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
            title
            text {
              text
            }
          }
        }
      }
    }
  }
`

export default PageTemplate
