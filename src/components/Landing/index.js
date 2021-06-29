import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import { ImageWrapper, Paragraph, Inner, TextBlock, Wrapper } from './landingStyles'
import ReactMarkdown from 'react-markdown'

const LandingPage = ({ page }) => {
  const USP_BLOCK_TITLE = 'Werkwijze'
  const OtherContent = page && page.filter((item) => item.name !== USP_BLOCK_TITLE)

  const sectionContent =
    OtherContent && OtherContent.length > 0 ? (
      OtherContent.map((item, index) =>
        item.columns.map((content) => (
          <TextBlock key={index}>
            <h2 className="block-header--green">{content.title}</h2>
            <ReactMarkdown className="landingpage-p text-center">{content.text.text}</ReactMarkdown>
          </TextBlock>
        ))
      )
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )

  return (
    <Wrapper>{OtherContent ? <Inner>{sectionContent}</Inner> : <div>{ERROR_MESSAGE}</div>}</Wrapper>
  )
}

export default LandingPage
