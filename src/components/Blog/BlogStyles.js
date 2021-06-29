import styled from '@emotion/styled'
import * as BP from '../../styles/breakPoints'

export const Wrapper = styled.div`
  background-color: hsl(170, 10.9%, 78.4%);
  padding: 2rem;
  @media only screen and (max-width: ${BP.MAX_L}) {
    padding: 1rem 0;
  }
`

export const Inner = styled.div`
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media only screen and (max-width: ${BP.MAX_L}) {
    flex-flow: column-reverse;
  }
`

export const BlogTextButton = styled.div`
  background-color: hsl(197, 39%, 93%);
  /* max-height: 400px; */
  max-width: 740px;
  padding: 2rem;
  left: 120px;
  z-index: 1;
  @media only screen and (min-width: ${BP.MIN_L}) {
    position: relative;
  }
  @media only screen and (max-width: ${BP.MAX_L}) {
    max-width: 828px;
    width: 100%;
  }
`

export const BlogText = styled.article`
  max-width: 80%;
  padding-bottom: 2rem;
`

export const BlogImage = styled.figure`
  max-width: 828px;
  max-height: 621px;
  @media only screen and (max-width: ${BP.MAX_L}) {
    margin: 0;
  }
`
