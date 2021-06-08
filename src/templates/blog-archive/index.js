import React from 'react'
import BlogOverview from '../../components/Blog/Overview'
import Layout from '../../components/layout'

const Index = (props) => {
  const {
    pageContext: { allPosts, categories },
  } = props

  return (
    <Layout>
      {allPosts && <BlogOverview allPosts={allPosts} categories={categories} />}
    </Layout>
  )
}

export default Index
