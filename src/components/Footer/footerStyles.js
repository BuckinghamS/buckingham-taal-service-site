import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as BP from '../../styles/breakPoints'

export const FooterWrapper = styled.footer`
  background-color: hsl(197, 39%, 93%);
  /* position: relative; */
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 6rem 0;
  @media only screen and (max-width: ${BP.MAX_L}) {
    padding: 2rem 0;
  }
`

export const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 83.4rem;
  display: grid;
  grid-template-columns: 200px auto auto 200px;
  grid-column-gap: 10%;
  p {
    margin-bottom: 0;
  }
  @media only screen and (max-width: ${BP.MAX_L}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    place-items: center;
  }
`

export const FooterImage = styled(Link)`
  height: auto;
  width: 270px;
`

export const LeftFooter = styled.div`
  color: hsl(170, 25%, 29%);
  text-align: right;
  p {
    margin: 0;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    text-align: center;
  }
`

export const RightFooter = styled.div`
  color: hsl(170, 25%, 29%);
  p {
    margin: 0;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    text-align: center;
  }
`

export const MenuWrapper = styled.nav`
  display: grid;
  grid-template-rows: repeat(3, auto);
  margin-right: 1rem;
  @media only screen and (max-width: ${BP.MAX_S}) {
    justify-items: center;
  }
`

export const MenuItem = styled(Link)`
  color: hsl(170, 25%, 29%);
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: hsl(170, 25%, 39%);
  }
`
export const PoweredByFooter = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-size: 0.7rem;
  display: flex;
  justify-content: space-evenly;

  a {
    color: hsl(170, 25%, 29%);
    text-decoration: none;
  }

  a:hover {
    color: hsl(170, 25%, 39%);
  }

  @media only screen and (max-width: ${BP.MAX_S}) {
    margin-top: 1rem;
    font-size: 0.5rem;
  }
`
