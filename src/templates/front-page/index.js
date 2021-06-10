import React from 'react'
import Layout from '../../components/layout'
import { ERROR_MESSAGE } from '../../utils'
import { GoDownButton, HeroGrid } from '../../components/Homepage/HeroStyles'
import { GatsbyImage } from 'gatsby-plugin-image'
import ChevronDown from './../../images/chevron_down.png'
import SEO from '../../components/seo'
import MeHomepage from '../../components/Homepage/MeHomepage'
import Uspgrid from '../../components/Homepage/UspGrid'
import LatestBlog from '../../components/Blog/LatestBlog'

const Homepage = (props) => {
  console.log(props.pageContext)
  const {
    pageContext: {
      page,
      page: {
        hero: {
          image,
          childContentfulComponentHeroTextTextNode: { text },
        },
        sections,
      },
    },
  } = props

  const ME_BLOCK_TITLE = 'Ik-sectie-homepage'
  const MeBlockData = sections.filter((item) => item.name === ME_BLOCK_TITLE)

  const USP_BLOCK_TITLE = 'Werkwijze'
  const UspGridData = sections.filter((item) => item.name === USP_BLOCK_TITLE)

  const heroImageFile = {
    img: image.localFile.childImageSharp.gatsbyImageData,
    alt: 'hero-image',
  }

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          <HeroGrid>
            {heroImageFile?.img && (
              <GatsbyImage
                image={heroImageFile.img}
                alt={heroImageFile.alt}
                className="banner-image-div"
              />
            )}
            <div className="banner-text-div">
              <h1 className="hero-title">{text}</h1>
              <GoDownButton to={'/'}>
                <img src={ChevronDown} />
              </GoDownButton>
            </div>
          </HeroGrid>
          <MeHomepage content={MeBlockData} />
          <Uspgrid content={UspGridData} />
          <LatestBlog />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export default Homepage
