import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { BlogImage, BlogText, BlogTextButton, Inner, Wrapper } from './BlogStyles'
import { ButtonLink } from './../Elements'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { slugCreator } from '../../utils'

const BLOG_HEADER = 'Blog'
const LEES_VERDER = 'Lees verder'

const LatestBlog = () => {
  const {
    allContentfulBlogArticle: { edges },
  } = useStaticQuery(graphql`
    query LatestBlogQuery {
      allContentfulBlogArticle(sort: { fields: createdAt, order: DESC }, limit: 1) {
        edges {
          node {
            title
            content {
              ... on ContentfulComponentImage {
                id
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              ... on ContentfulComponentText {
                id
                title
                text {
                  text
                }
              }
            }
          }
        }
      }
    }
  `)

  const { content, title } = edges && edges[0].node
  const {
    text: { text },
  } = content && content[0]
  const {
    image: {
      localFile: {
        childImageSharp: { gatsbyImageData },
      },
    },
  } = content && content.filter((item) => item.image)[0]

  const maxIntroText = text && text.replace(/^(.{350}[^\s]*).*/, '$1') + '\n' + '...'

  const slug = title && `/blog/${slugCreator(title)}`

  return (
    <Wrapper>
      <h2 className="block-header--orange">{BLOG_HEADER}</h2>
      <Inner>
        <BlogTextButton>
          <BlogText>
            {title && <h3 className="blog-preview-title">{title}</h3>}
            {text && <ReactMarkdown className="blog-preview-body">{maxIntroText}</ReactMarkdown>}
          </BlogText>
          <ButtonLink to={slug}>
            <span>{LEES_VERDER}</span>
            <span style={{ paddingLeft: `8px` }}>{<HiOutlineChevronRight />}</span>
          </ButtonLink>
        </BlogTextButton>
        <BlogImage>
          {gatsbyImageData && (
            <GatsbyImage image={gatsbyImageData} alt={title} className="image--no-constrained" />
          )}
        </BlogImage>
      </Inner>
    </Wrapper>
  )
}

export default LatestBlog
