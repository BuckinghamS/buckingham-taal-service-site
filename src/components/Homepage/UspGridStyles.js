import styled from '@emotion/styled'

export const UspContainer = styled.div`
  background-color: hsl(170, 25%, 29%);
  @media only screen and (max-width: 767px) {
    margin: 0 2rem;
  }
`

export const Inner = styled.div`
  margin: 120px auto;
  max-width: 1200px;
`

export const HeaderContainer = styled.div`
  margin-bottom: 5rem;
`

export const Grid = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
  grid-gap: 2.5rem;
  padding-bottom: 6rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1.5rem;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
    grid-gap: 1rem;
  } */
`

export const GridCell = styled.div`
  display: flex;
  flex-flow: column;
  width: 330px;
  text-align: center;
`

export const CellText = styled.div`
  display: flex;
  flex-flow: column;
`

export const CellImage = styled.figure`
  display: grid;
  place-self: center;
`
