import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import BlogDetail from '../../components/Blog/Detail'
import BlogPageHero from '../../components/Blog/Detail/Hero'
import RelatedBlog from '../../components/Blog/Detail/RelatedBlog'

const ERROR_LOADING = 'Kan de pagina niet laden.'

const BlogDetailTemplate = ({ data }) => {
  // const {
  //   contentfulBlogArticle: { title, content, id },
  // } = data && data

  // const HeroImage = content && content.filter((item) => item.image)[0]
  // const BlogIntro = content && content.filter((item) => item.text)[0]
  // const BlogRest = content && content.filter((items) => items !== BlogIntro && items !== HeroImage)

  return (
    <Layout>
      {/* <SEO title={title} />
      {!isEmpty(data) ? (
        <>
          <BlogPageHero HeroImage={HeroImage} title={title} BlogIntro={BlogIntro} />
          <BlogDetail data={BlogRest} />
          <RelatedBlog currentBlog={id} />
        </>
      ) : (
        <div>{ERROR_LOADING}</div>
      )} */}
    </Layout>
  )
}

// export const query = graphql`
//   query ($id: String!) {
//     contentfulBlogArticle(id: { eq: $id }) {
//       id
//       title
//       content {
//         ... on ContentfulComponentImage {
//           id
//           title
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//         }
//         ... on ContentfulComponentText {
//           id
//           title
//           text {
//             text
//           }
//         }
//       }
//     }
//   }
// `

export default BlogDetailTemplate
