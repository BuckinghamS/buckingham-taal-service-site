import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as BP from '../../../styles/breakPoints'

export const MenuWrapper = styled.nav`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex: 1;
  @media only screen and (max-width: ${BP.MAX_L}) {
    justify-content: space-between;
    max-width: 80%;
    margin: 0 auto;
  }
`
export const InnerMenuWrapper = styled.nav`
  justify-content: center;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
`

export const MenuItem = styled(Link)`
  color: hsl(0, 0%, 0%);
  font-size: 11px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem;
`

export const NoLinkMenuItem = styled.div`
  color: hsl(170, 25%, 29%);
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem;
  display: flex;
  place-content: center;
`

export const OpenIcon = styled.div`
  cursor: pointer;
  @media only screen and (min-width: ${BP.MIN_L}) {
    display: none;
  }
`

export const DesktopWrapper = styled.div`
  width: 88%;
  @media only screen and (max-width: ${BP.MAX_L}) {
    display: none;
  }
`

export const LogoContainer = styled.figure`
  display: flex;
  align-items: center;
  width: 409px;
  position: relative;
  margin: 0;
  top: 40px;
  left: 1rem;
`

export const LogoContainerMobile = styled.figure`
  position: relative;
  top: 10px;
  width: 200px;
  margin: 0;
  a {
    display: flex;
  }
  @media only screen and (min-width: ${BP.MIN_L}) {
    display: none;
  }
`
