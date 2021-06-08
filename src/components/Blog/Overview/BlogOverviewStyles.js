import styled from '@emotion/styled'

export const BlogHero = styled.div`
  background-color: hsl(170, 11%, 78%);
  height: 700px;
`

export const BlogCategoryContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding-top: 10rem;
`

export const BlogGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  transform: translateY(-24rem);
`

export const BlogEmptyState = styled.div`
  transform: translateY(-24rem);
`

export const BlogCategory = styled.div`
  cursor: pointer;
  user-select: none;
`
