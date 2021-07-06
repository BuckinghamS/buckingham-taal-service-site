import styled from '@emotion/styled'
import * as BP from '../../../styles/breakPoints'

export const Wrapper = styled.article``

export const TopSection = styled.div`
  background-color: hsl(170, 11%, 78%);
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 3%;
`

export const InnerTopSection = styled.div`
  max-width: 70%;
  margin: 0 auto;
`

export const BodySection = styled.div`
  max-width: 50%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media only screen and (min-width: ${BP.MIN_L}) {
    min-width: 800px;
  }
  @media only screen and (max-width: ${BP.MAX_L}) {
    max-width: 80%;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    min-width: 100%;
    padding: 2rem;
  }
`

export const ImageBlock = styled.figure``

export const TextBlock = styled.div`

`
