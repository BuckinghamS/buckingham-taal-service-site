import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import BlogDetail from '../../components/Blog/Detail'

const ERROR_LOADING = 'Kan de pagina niet laden.'

const BlogDetailTemplate = ({data}) => {
    const {contentfulBlogArticle} = data
    return (
        <Layout>
            {!isEmpty(contentfulBlogArticle) ? <BlogDetail data={contentfulBlogArticle}/> : <div>{ERROR_LOADING}</div>}
        </Layout>
    )
}

export const query = graphql`
  query($id: String!) {
  contentfulBlogArticle(id: { eq: $id }) {
    title
    content {
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
`

export default BlogDetailTemplate
