import React from 'react'
import { ERROR_MESSAGE } from '../../../utils'
import { GatsbyImage } from 'gatsby-plugin-image'
import { HeaderContainer, InnerContainer, ImageContainer, TextContainer } from '../../../styles/globalStyles'

const LandingPageHero = (props) => {
  const { hero: {childContentfulComponentHeroTextTextNode: {text}, image: {localFile: {childImageSharp: {gatsbyImageData}}}}, internalName } = props && props

  console.log(props)

  // const heroImageFile = {
  //   img: header_image?.localFile.childImageSharp.gatsbyImageData,
  //   alt: title || ``,
  // }

  return (
    <>
      {internalName ? (
        <HeaderContainer>
          <InnerContainer>
          {gatsbyImageData && (
            <ImageContainer>
            <GatsbyImage
              image={gatsbyImageData}
              alt={internalName}
              className="header-image--no-constrained header-image--height-small full-bleed"
              />
            </ImageContainer>
          )}
          <TextContainer>
            <h1 className="page-title page-title--shop">
              {internalName} <br />
            </h1>
            </TextContainer>
          </InnerContainer>
        </HeaderContainer>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </>
  )
}

export default LandingPageHero
