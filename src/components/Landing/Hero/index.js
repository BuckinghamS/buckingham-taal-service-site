import React from 'react'
import { ERROR_MESSAGE } from '../../../utils'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  HeaderContainer,
  InnerContainer,
  ImageContainer,
  TextContainer,
} from '../../../styles/globalStyles'
import ReactMarkdown from 'react-markdown'
import { ButtonLink } from './../../Elements'
import { HiOutlineChevronRight } from 'react-icons/hi'

const OFFERTE_FORMULIER = 'Offerteformulier'

const LandingPageHero = (props) => {
  const {
    hero: {
      text,
      image,
    },
    internalName,
  } = props && props

  return (
    <>
      {internalName ? (
        <HeaderContainer>
          <h1 className="page-title">{internalName}</h1>
          <InnerContainer>
            {image?.localFile?.childImageSharp?.gatsbyImageData && (
              <ImageContainer>
                <GatsbyImage
                  image={image?.localFile?.childImageSharp?.gatsbyImageData}
                  alt={internalName}
                  className="header-image--no-constrained header-image--height-small"
                />
              </ImageContainer>
            )}
            <TextContainer>
              {text && <ReactMarkdown className="landingpage-p">{text?.text}</ReactMarkdown>}
              <ButtonLink to={'/offerte'}>
                <span>{OFFERTE_FORMULIER}</span>
                <span style={{ paddingLeft: `8px` }}>{<HiOutlineChevronRight />}</span>
              </ButtonLink>
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
