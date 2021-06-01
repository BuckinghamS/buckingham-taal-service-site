import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 83.3333333333%;
  max-width: 1200px;
  z-index: 1;
  position: relative;
  margin: 5.666rem auto;
`

export const InnerWrapper = styled.div`
  width: 78%;
  min-width: 800px;
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
`

export const TextBlock = styled.div`
  /* height: 490px; */
  width: 490px;
`
