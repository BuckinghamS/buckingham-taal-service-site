import styled from '@emotion/styled'
import * as BP from '../../styles/breakPoints'

export const Wrapper = styled.div`
  width: 83.3333333333%;
  max-width: 1200px;
  z-index: 1;
  position: relative;
  margin: 5.666rem auto;
`

export const InnerWrapper = styled.div`
  @media only screen and (min-width: ${BP.MIN_L}) {
    width: 78%;
    min-width: 800px;
  }
  display: flex;
  flex-flow: row;
  flex-wrap: auto;
  margin: 0 auto;
  justify-content: space-between;
`

export const ImageBlock = styled.figure`
  display: flex;
  place-items: center;
  div {
    width: 377px;
    height: 377px;
  }
  @media only screen and (max-width: ${BP.MAX_L}) {
    display: none;
  }
`

export const TextBlock = styled.div`
  /* height: 490px; */
  max-width: 490px;
  /* @media only screen and (max-width: ${BP.MAX_L}) {
      grid-template-rows: 100%; // 350 pixels tall
  } */
`
