import React from 'react'
import Layout from '../../components/layout'
import { ERROR_MESSAGE } from '../../utils'
import SEO from '../../components/seo'
import Hero from '../../components/OverMij/Hero'
import Body from '../../components/OverMij/Body'

const OverMij = (props) => {
  const {
    pageContext: {
      page,
      page: { hero, sections },
    },
  } = props

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          {hero && <Hero page={page} />}
          <Body sections={sections} />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export default OverMij
