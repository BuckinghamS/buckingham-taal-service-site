import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FiMenu } from 'react-icons/fi'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  DesktopWrapper,
  InnerMenuWrapper,
  LogoContainer,
  MenuItem,
  MenuWrapper,
  NoLinkMenuItem,
  OpenIcon,
} from './MenuStyles'

const Menu = (props) => {
  const { gatsbyImageData, toggleMenu, siteTitle } = props
  const {
    contentfulMenu: { items },
  } = useStaticQuery(graphql`
    query MainMenuQuery {
      contentfulMenu(internalName: { eq: "Main menu" }) {
        items {
          id
          navLink
          navName
        }
      }
    }
  `)

  const half = items && Math.ceil(items.length / 2)
  const firstHalf = items && half && items.slice(0, half)
  const secondHalf =
    items &&
    half &&
    items
      .slice(-half)
      .filter((item) => item !== firstHalf[firstHalf.length - 1])

  return (
    <MenuWrapper>
      <OpenIcon onClick={toggleMenu}>
        <NoLinkMenuItem>
          <FiMenu size={30} />
        </NoLinkMenuItem>
      </OpenIcon>
      <DesktopWrapper>
        <InnerMenuWrapper>
          {firstHalf &&
            firstHalf.map((item, index) => {
              return (
                <MenuItem key={index} to={item.navLink}>
                  {item.navName}
                </MenuItem>
              )
            })}
          <LogoContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
              {gatsbyImageData ? (
                <GatsbyImage image={gatsbyImageData} alt={siteTitle} />
              ) : (
                <h2 className="site-title">{siteTitle}</h2>
              )}
            </Link>
          </LogoContainer>
          {secondHalf &&
            secondHalf.map((item, index) => {
              return (
                <MenuItem key={index} to={item.navLink}>
                  {item.navName}
                </MenuItem>
              )
            })}
        </InnerMenuWrapper>
      </DesktopWrapper>
    </MenuWrapper>
  )
}

export default Menu
