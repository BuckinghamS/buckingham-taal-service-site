import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as BP from '../../../styles/breakPoints'

export const CardWrapper = styled(Link)`
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
  height: 740px;
  text-decoration: none;
  @media only screen and (min-width: ${BP.MIN_M}) {
    width: 470px;
  }
`

export const TextContainer = styled.article`
  padding: 0 2rem;
  display: flex;
  flex-flow: column;
  min-height: 350px;
`

export const ButtonContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: flex-end;
`
