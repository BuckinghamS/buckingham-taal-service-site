import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { ERROR_MESSAGE } from './../../utils'
import { BodyInner, BodyWrapper, ImageBlock, TextBlock } from './OverMijStyles'

const Body = ({ sections }) => {
  console.log(sections)

  const ContentCreator = ({ content }) => {
    console.log(content)
    if (content.text) {
      return (
        <TextBlock>
          <ReactMarkdown>{content.text.text}</ReactMarkdown>
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
    sections && sections.length > 0 ? (
      sections.map((item, index) =>
        item.columns.map((column) => {
          return (
            <div key={index}>
              <h2>{column.title}</h2>
              <ContentCreator content={column} />
            </div>
          )
        })
      )
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )

  return (
    <BodyWrapper>
      <BodyInner>
        {sections ? <>{pageContent}</> : <div>{ERROR_MESSAGE}</div>}
      </BodyInner>
    </BodyWrapper>
  )
}

export default Body
