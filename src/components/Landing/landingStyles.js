import styled from '@emotion/styled'

export const Wrapper = styled.div`
  /* max-width: 800px;
  margin: 5% auto 0; */
  background-color: hsl(197, 39%, 93%);
`

export const Inner = styled.div`
  width: 60%;
  min-width: 800px;
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  justify-content: center;
  padding: 1rem 0 3rem;
  min-height: 450px;
  @media only screen and (max-width: 767px) {
    min-width: 100%;
  }
`

export const TextBlock = styled.div`
  max-width: 50%;
  @media only screen and (max-width: 1023px) {
    max-width: 75%;
  }
`

export const Paragraph = styled.section`
  padding: 1rem 0;
  @media only screen and (max-width: 1023px) {
    padding: 0 2rem;
  }
`

export const ImageWrapper = styled.figure``
