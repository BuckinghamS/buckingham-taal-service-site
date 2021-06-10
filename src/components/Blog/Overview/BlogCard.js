import React from 'react'
import ReactMarkdown from 'react-markdown'
import { GatsbyImage } from 'gatsby-plugin-image'
import { CardWrapper, TextContainer } from './BlogCardStyles'
import { ButtonLink } from './../../Elements'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { slugCreator } from '../../../utils'

const BLOG_INTRO = 'Blog Intro'
const READ_MORE_LINK = 'Lees verder'

const Blogcard = ({ item }) => {
  const { title, content } = item

  const BlogPreview =
    content &&
    content
      .filter((item) => item.title === BLOG_INTRO)[0]
      .text.text.replace(/^(.{250}[^\s]*).*/, '$1') +
      '\n' +
      '...'

  const BlogImage =
    content &&
    content.filter((item) => item.image)[0].image?.localFile.childImageSharp
      .gatsbyImageData

  const slug = title && `/blog/${slugCreator(title)}`

  return (
    <CardWrapper to={slug}>
      {BlogImage && <GatsbyImage image={BlogImage} alt={title} />}
      <TextContainer>
        {title && <h3 className="blog-card-title">{title}</h3>}
        {BlogPreview && (
          <ReactMarkdown className="landingpage-p">{BlogPreview}</ReactMarkdown>
        )}
        {title && (
          <ButtonLink to={slug}>
            <span>{READ_MORE_LINK}</span>
            <span style={{ paddingLeft: `8px` }}>
              {<HiOutlineChevronRight />}
            </span>
          </ButtonLink>
        )}
      </TextContainer>
    </CardWrapper>
  )
}

export default Blogcard
