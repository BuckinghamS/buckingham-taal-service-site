import React from 'react'
import { FiX } from 'react-icons/fi'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  CloseIcon,
  Logo,
  LogoIcon,
  MenuInnerContainer,
  MenuItem,
  MenuLink,
  MenuWrapper,
  MobileMenu,
  Overlay,
} from './SidebarStyles'

const Sidebar = ({ showMenu, toggleMenu }) => {
  const {
    contentfulMenu: { items },
  } = useStaticQuery(graphql`
    query MainMenuSideBarQuery {
      contentfulMenu(internalName: { eq: "Main menu" }) {
        items {
          id
          navLink
          navName
        }
      }
    }
  `)

  return (
    <MenuWrapper className="menu-wrapper">
      <MobileMenu showMenu={showMenu} onClick={toggleMenu}>
        <LogoIcon>
          {/* <Link to="/">
            <Logo src={logo} width={158} />
          </Link> */}
          <CloseIcon onClick={toggleMenu}>
            <FiX size={34} style={{ color: 'white', marginRight: '1rem' }} />
          </CloseIcon>
        </LogoIcon>
        <MenuInnerContainer>
          {items &&
            items.map((menuItem, i) => {
              const path = menuItem.navLink

              const itemId = 'menu-item-' + menuItem.navLink.replace(/^\/|\/$/g, '')

              return (
                <MenuItem
                  id={itemId}
                  key={i + menuItem.navLink}
                  className={
                    'menu-item menu-item-type-custom menu-item-object-custom menu-item-home ' +
                    itemId
                  }
                >
                  <MenuLink
                    to={path}
                    activeClassName={'current-menu-item current_page_item small-letters'}
                  >
                    {menuItem.navName}
                  </MenuLink>
                </MenuItem>
              )
            })}
        </MenuInnerContainer>
        <Overlay showMenu={showMenu} />
      </MobileMenu>
    </MenuWrapper>
  )
}

export default Sidebar
