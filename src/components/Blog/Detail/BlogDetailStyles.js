import styled from '@emotion/styled'

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
  @media only screen and (min-width: 1025px) {
    min-width: 800px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 767px) {
    min-width: 100%;
    padding: 2rem;
  }
`

export const ImageBlock = styled.figure``

export const TextBlock = styled.div`

`
