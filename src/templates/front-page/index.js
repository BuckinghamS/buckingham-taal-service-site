import React from 'react'
import Layout from '../../components/layout'
import { ERROR_MESSAGE } from '../../utils'
import { GoDownButton, HeroGrid } from '../../components/Homepage/HeroStyles'
import { GatsbyImage } from 'gatsby-plugin-image'
import ChevronDown from './../../images/chevron_down.png'
import SEO from '../../components/seo'
import MeHomepage from '../../components/Homepage/MeHomepage'
import Uspgrid from '../../components/Homepage/UspGrid'
// import Discover from '../../components/Homepage/Discover'
// import People from '../../components/Homepage/People'
// import Order from '../../components/Homepage/Order'

const Homepage = (props) => {
  console.log(props.pageContext)
  const {
    pageContext: {
      page,
      page: {
        hero: {
          ctaLink,
          ctaText,
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

  console.log(UspGridData)

  // const PEOPLE_BLOCK_TITLE = 'Tim & Ruth'
  // const PeopleBlockData = sections.filter(
  //   item => item.name === PEOPLE_BLOCK_TITLE
  // )

  // const ORDER_BLOCK_TITLE = 'bestellen & genieten'
  // const OrderBlockData = sections.filter(
  //   item => item.name === ORDER_BLOCK_TITLE
  // )

  const heroImageFile = {
    img: image.localFile.childImageSharp.gatsbyImageData,
    alt: 'hero-image',
  }

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          <div className="full-bleed">
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
                <GoDownButton to={ctaLink}>
                  <img src={ChevronDown} />
                </GoDownButton>
              </div>
            </HeroGrid>
          </div>
          <div className="full-bleed">
            <MeHomepage content={MeBlockData} />
          </div>
          <div>
            <Uspgrid content={UspGridData} />
          </div>
          {/* <div className="full-bleed" style={{ paddingBottom: `5rem` }}>
            <People content={PeopleBlockData} />
          </div> */}
          {/* <div className="full-bleed">
            <Order content={OrderBlockData} />
          </div> */}
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export default Homepage
