import styled from '@emotion/styled'
import * as BP from '../../styles/breakPoints'

export const HeroContainer = styled.div`
  background-color: hsl(170, 11%, 78%);
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 3%;
`

export const InnerContainer = styled.div`
  width: 60%;
  min-width: 800px;
  display: flex;
  flex-flow: row;
  flex-wrap: auto;
  margin: 0 auto;
  @media only screen and (max-width: ${BP.MAX_L}) {
    flex-flow: column;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    min-width: 100%;
  }
`

export const ImageContainer = styled.figure`
  padding-right: 6%;
  display: flex;
  place-items: center;
  div {
    width: 377px;
    height: 377px;
  }
  @media only screen and (max-width: ${BP.MAX_L}) {
    padding: 0;
    place-content: center;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    padding: 0;
    justify-content: center;
    div {
      width: 208px;
      height: 208px;
    }
  }
`

export const TextContainer = styled.article`
  /* max-width: 490px; */
  @media only screen and (max-width: ${BP.MAX_L}) {
    width: 80%;
    margin: 0 auto;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    padding: 2rem;
  }
`

export const TextBlock = styled.article``

export const ImageBlock = styled.figure``

export const BodyWrapper = styled.div`
  background-color: hsl(170, 25%, 29%);
`

export const BodyInner = styled.div`
  width: 60%;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  div {
    text-align: center;
    max-width: 425px;
    color: white;
  }
  padding: 2rem 0;
  @media only screen and (max-width: ${BP.MAX_M}) {
    min-width: 100%;
    padding: 2rem;
  }
`
