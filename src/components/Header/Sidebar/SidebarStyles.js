import styled from '@emotion/styled'
import * as BP from '../../../styles/breakPoints'
import { Link } from 'gatsby'

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
`

export const CloseIcon = styled.div`
  margin-left: auto;
  margin-top: 3%;
  cursor: pointer;
  @media only screen and (min-width: ${BP.MIN_S}) {
    margin-right: 32px;
  }
`

export const Logo = styled.img`
  margin: 1rem;
`

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  @media only screen and (min-width: ${BP.MIN_L}) {
    display: none;
  }
`

export const MobileMenu = styled.aside`
  list-style-type: none;
  background-color: hsl(170, 25%, 29%);
  position: fixed;
  z-index: 999;
  width: 100%;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ showMenu }) => (showMenu ? '100%' : '0')};
  top: ${({ showMenu }) => (showMenu ? '0' : '-100%')};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
`

export const Overlay = styled.div`
  background: black;
  width: 100%;
  height: ${({ showMenu }) => (showMenu ? '100%' : '0')};
  position: fixed;
  z-index: -1;
  left: 0;
  opacity: 0.2;
  top: 0;
`

export const MenuInnerContainer = styled.div`
  align-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-flow: column;
`

export const MenuItem = styled.div`
  margin: 0.5rem 2.5rem;
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: lowercase;
  width: 80%;
  display: block;
`
