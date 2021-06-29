import styled from '@emotion/styled'
import * as BP from '../../styles/breakPoints'

export const Wrapper = styled.div`
  background-color: hsl(197, 39%, 93%);
`

export const Inner = styled.div`
  width: 60%;
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  justify-content: center;
  padding: 1rem 0 3rem;
  min-height: 450px;
  @media only screen and (min-width: ${BP.MIN_M}) {
    min-width: 800px;
  }
`

export const TextBlock = styled.div`
  @media only screen and (min-width: ${BP.MIN_M}) {
    max-width: 50%;
  }
`

export const Paragraph = styled.section`
  padding: 1rem 0;
  @media only screen and (max-width: ${BP.MAX_L}) {
    padding: 0 2rem;
  }
`

export const ImageWrapper = styled.figure``
