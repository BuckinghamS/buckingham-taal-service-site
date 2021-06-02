import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Menu from './Menu'
import Sidebar from './Sidebar'
import {
  HeaderWrapper,
  LogoContainer,
  NavContainer,
  NavWrapper,
} from './headerStyles'

const Header = (props) => {
  const {
    siteTitle,
    image: {
      localFile: {
        childImageSharp: { gatsbyImageData },
      },
    },
  } = props
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavContainer>
          <Menu
            toggleMenu={toggleMenu}
            gatsbyImageData={gatsbyImageData}
            siteTitle={siteTitle}
          />
          <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </NavContainer>
      </NavWrapper>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
