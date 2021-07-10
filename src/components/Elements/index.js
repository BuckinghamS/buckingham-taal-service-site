import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
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

export const ButtonLink = styled(Link)`
  border-radius: 4px;
  background-color: hsl(10, 79%, 60%);
  transition: background-color ease-in-out 0.3s;
  padding: 12px 60px 15px 51px;
  display: flex;
  max-width: max-content;
  text-decoration: none;
  color: white;
  align-items: center;
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: hsl(10, 79%, 50%);
  }
`

export const ButtonLinkText = styled(Link)`
  color: hsl(37, 100%, 50%);
  text-decoration: none;
  transition: background-color ease-in-out 0.3s;
  display: flex;
  max-width: max-content;
  span {
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  &:hover {
    color: hsl(37, 100%, 40%);
  }
`
