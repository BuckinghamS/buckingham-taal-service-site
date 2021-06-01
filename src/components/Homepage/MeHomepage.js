import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import {
  ImageBlock,
  InnerWrapper,
  TextBlock,
  Wrapper,
} from './MeHomepageStyles'
import {Button} from './../Elements'
import ReactMarkdown from 'react-markdown'
import { HiOutlineChevronRight } from 'react-icons/hi'

const OFFERTE_FORMULIER = 'Offerteformulier'

const MeHomepage = (props) => {
  console.log(props)
  const { content } = props
  const { name, columns } = content && content[0]

  const ContentCreator = ({ content }) => {
    if (content.text) {
      return (
        <TextBlock>
          <h3 className="me-header">{content.title}</h3>
          <ReactMarkdown className="landingpage-p">
            {content.text.text}
          </ReactMarkdown>
          <Button to={'/'}>
            <span>{OFFERTE_FORMULIER}</span>
            <span style={{ paddingLeft: `8px` }}>
              {<HiOutlineChevronRight />}
            </span>
          </Button>
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
