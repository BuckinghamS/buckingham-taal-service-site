import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { BodySection, Wrapper } from './BlogDetailStyles'
import { ERROR_MESSAGE } from '../../../utils'
import { ImageBlock, TextBlock } from './BlogDetailStyles'

const BlogDetail = (props) => {
  const { data } = props

  const ContentCreator = ({ content }) => {
    if (content.text) {
      return (
        <TextBlock>
          <ReactMarkdown className="landingpage-p">{content.text.text}</ReactMarkdown>
        </TextBlock>
      )
    } else if (content.image) {
      return (
        <ImageBlock>
          <GatsbyImage
            image={content.image.localFile.childImageSharp.gatsbyImageData}
            alt={content.title}
          />
        </ImageBlock>
      )
    }
    return null
  }

  const pageContent =
    data && data.length > 0 ? (
      data.map((item, index) => <ContentCreator key={index} content={item} />)
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )

  return (
    <Wrapper>
      <BodySection>{data ? <>{pageContent}</> : <div>{ERROR_MESSAGE}</div>}</BodySection>
    </Wrapper>
  )
}

export default BlogDetail
