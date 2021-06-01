import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Button = styled(Link)`
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