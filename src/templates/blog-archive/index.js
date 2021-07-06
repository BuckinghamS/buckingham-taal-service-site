import React from 'react'
import BlogOverview from '../../components/Blog/Overview'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Index = (props) => {
  const {
    pageContext: { allPosts, categories },
  } = props

  return <Layout><SEO title="Blog" />  {allPosts && <BlogOverview allPosts={allPosts} categories={categories} />}</Layout>
}

export default Index
