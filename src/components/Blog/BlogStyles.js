import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  background-color: hsl(170, 10.9%, 78.4%);
  padding: 2rem;
`

export const Inner = styled.div`
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const BlogTextButton = styled.div`
  background-color: hsl(197, 39%, 93%);
  /* max-height: 400px; */
  max-width: 740px;
  padding: 2rem;
  position: relative;
  left: 120px;
  z-index: 1;
`

export const BlogText = styled.article`
  max-width: 80%;
  padding-bottom: 2rem;
`

export const BlogImage = styled.figure`
  max-width: 828px;
  max-height: 621px;
`

export const ReadMoreButton = styled(Link)`
  border-radius: 4px;
  background-color: hsl(10, 79%, 60%);
  transition: background-color ease-in-out 0.3s;
  padding: 12px 60px 15px 51px;
  display: flex;
  max-width: max-content;
  text-decoration: none;
  color: white;
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: hsl(10, 79%, 50%);
  }
`
