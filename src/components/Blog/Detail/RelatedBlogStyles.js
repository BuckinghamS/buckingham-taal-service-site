import styled from '@emotion/styled'
import * as BP from '../../../styles/breakPoints'

export const Banner = styled.div`
  background-color: hsl(170, 25%, 29%);
`
export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 50%;
  padding: 1rem 0 5rem;
  display: flex;
  place-content: center;
  @media only screen and (max-width: ${BP.MAX_M}) {
    max-width: 100%;
    text-align: center;
  }
`

export const BlogContainer = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  grid-column-gap: 2rem;
  max-width: 65%;
  margin: 0 auto;
  transform: translateY(-3rem);
  @media only screen and (max-width: ${BP.MAX_L}) {
    max-width: 100%;
    grid-row-gap: 2rem;
    place-items: center;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    grid-template-columns: none;
    max-width: 100%;
    place-items: center;
  }
`