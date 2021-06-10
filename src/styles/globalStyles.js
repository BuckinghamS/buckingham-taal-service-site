import styled from '@emotion/styled'

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
  /* justify-content: space-between; */
`

export const ImageContainer = styled.figure`
  display: flex;
  place-items: center;
`

export const TextContainer = styled.div`
  width: 490px;
  margin-left: 2rem;
`
