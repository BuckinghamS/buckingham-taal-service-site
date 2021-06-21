import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { HeroContainer, ImageContainer, InnerContainer, TextContainer } from './OverMijStyles'

const Hero = ({ page }) => {
  const {
    internalName,
    hero: {
      image: {
        localFile: {
          childImageSharp: { gatsbyImageData },
        },
      },
      text: { text },
    },
  } = page

  return (
    <>
      {page && (
        <HeroContainer>
          <h1 className="page-title">{internalName}</h1>
          <InnerContainer>
            {gatsbyImageData && (
              <ImageContainer>
                <GatsbyImage image={gatsbyImageData} alt={internalName} />
              </ImageContainer>
            )}
            {text && (
              <TextContainer>
                <ReactMarkdown className="landingpage-p">{text}</ReactMarkdown>
              </TextContainer>
            )}
          </InnerContainer>
        </HeroContainer>
      )}
    </>
  )
}

export default Hero
