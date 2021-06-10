import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Banner, HeaderContainer, ProductContainer } from './RelatedBlogStyles'
import BlogCard from '../Overview/BlogCard'

const RELATED_HEADER = 'Dit vind je misschien ook interessant'

const RelatedBlog = ({ currentBlog }) => {
  const RelatedBlogs = useStaticQuery(graphql`
    query RelatedBlogs {
      fourBlogPosts: allContentfulBlogArticle(
        limit: 4
        sort: { order: DESC, fields: createdAt }
      ) {
        edges {
          node {
            id
            title
            content {
              ... on ContentfulComponentText {
                id
                title
                text {
                  text
                }
              }
              ... on ContentfulComponentImage {
                id
                title
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = RelatedBlogs.fourBlogPosts
  const otherRelatedBlogs = edges.filter((item) => item.node.id !== currentBlog)

  const maxThreeBlogPosts = otherRelatedBlogs.slice(0, 3)
  const mappedBlogPosts = maxThreeBlogPosts
    ? maxThreeBlogPosts.map((item, index) => (
        <BlogCard key={index} item={item.node} />
      ))
    : null

  return (
    <div className="full-bleed">
      <Banner>
        <HeaderContainer>
          <h2 className="related-blog--header">{RELATED_HEADER}</h2>
        </HeaderContainer>
      </Banner>
      <ProductContainer>{mappedBlogPosts}</ProductContainer>
    </div>
  )
}

export default RelatedBlog
