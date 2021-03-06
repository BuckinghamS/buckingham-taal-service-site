import styled from '@emotion/styled'
import * as BP from '../../../styles/breakPoints'

export const BlogHero = styled.div`
  background-color: hsl(170, 11%, 78%);
  height: 700px;
  @media only screen and (max-width: ${BP.MAX_M}) {
    display: none;
  }
`

export const BlogCategoryContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding-top: 10rem;
`

export const BlogGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  justify-items: center;
  @media only screen and (min-width: ${BP.MIN_M}) {
    transform: translateY(-24rem);
  }
  @media only screen and (min-width: ${BP.MIN_L}) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`

export const BlogEmptyState = styled.div`
  @media only screen and (min-width: ${BP.MIN_M}) {
    transform: translateY(-24rem);
  }
`

export const BlogCategory = styled.div`
  cursor: pointer;
  user-select: none;
`

export const LoadMoreContainer = styled.div`
  display: flex;
  place-content: center;
  @media only screen and (min-width: ${BP.MIN_M}) {
    transform: translateY(-16rem);
  }
`