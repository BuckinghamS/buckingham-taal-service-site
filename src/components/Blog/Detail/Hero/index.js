import React from 'react'
import { ERROR_MESSAGE } from '../../../../utils'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  HeaderContainer,
  InnerContainer,
  ImageContainer,
  TextContainer,
} from '../../../../styles/globalStyles'
import ReactMarkdown from 'react-markdown'

const BlogPageHero = (props) => {
  const {
    HeroImage: {
      image: {
        localFile: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
    BlogIntro: {
      text: { text },
    },
    title,
  } = props && props

  return (
    <>
      {props ? (
        <HeaderContainer>
          {title && (
            <h1 className="blog-detail--header">
              {title} <br />
            </h1>
          )}
          <InnerContainer>
            {gatsbyImageData && (
              <ImageContainer>
                <GatsbyImage
                  image={gatsbyImageData}
                  alt={title ?? 'blog-hero-image'}
                  className="header-image--no-constrained header-image--height-small"
                />
              </ImageContainer>
            )}
            <TextContainer>
              {text && <ReactMarkdown className="blog-detail--header--p">{text}</ReactMarkdown>}
            </TextContainer>
          </InnerContainer>
        </HeaderContainer>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </>
  )
}

export default BlogPageHero
