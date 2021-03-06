import styled from '@emotion/styled'
import * as BP from './breakPoints'

export const HeaderContainer = styled.div`
  background-color: hsl(170, 11%, 78%);
  /* width: 100%;
  max-width: 1920px; */
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 3%;
`

export const InnerContainer = styled.div`
  width: 50%;
  min-width: 800px;
  display: flex;
  flex-flow: row;
  flex-wrap: auto;
  margin: 0 auto;
  @media only screen and (max-width: ${BP.MAX_L}) {
    flex-flow: column;
    min-width: 100%;
    place-items: center;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    flex-flow: column;
    min-width: 100%;
  }
`

export const ImageContainer = styled.figure`
  display: flex;
  place-items: center;
`

export const TextContainer = styled.div`
  width: 490px;
  margin-left: 2rem;
  @media only screen and (max-width: ${BP.MAX_L}) {
    width: 80%;
    margin: 0;
  }
  @media only screen and (max-width: ${BP.MAX_M}) {
    width: 100%;
    margin: 0;
    padding: 0 2rem;
  }
`
