import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import {
  ImageBlock,
  InnerWrapper,
  TextBlock,
  Wrapper,
} from './MeHomepageStyles'
import ReactMarkdown from 'react-markdown'

const MeHomepage = (props) => {
  const { content } = props
  const { name, columns } = content && content[0]

  const ContentCreator = ({ content }) => {
    if (content.text) {
      return (
        <TextBlock>
          <ReactMarkdown className="landingpage-p">
            {content.text.text}
          </ReactMarkdown>
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
    columns && columns.length > 0 ? (
      columns.map((item, index) => (
        <ContentCreator key={index} content={item} />
      ))
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )

  return (
    <Wrapper>
      <InnerWrapper>
        {content[0] ? <>{pageContent}</> : <div>{ERROR_MESSAGE}</div>}
      </InnerWrapper>
    </Wrapper>
  )
}

export default MeHomepage
