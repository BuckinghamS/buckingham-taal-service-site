import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
  background-color: hsl(0, 0%, 100%);
  /* position: absolute; */
  position: sticky;
  top: 0;
  z-index: 10;
`

export const NavWrapper = styled.nav`
  padding: 0;
  height: 80px;
  border-bottom: none;
  /* z-index: 1000;
  top: 0; */
  width: 100%;
  max-width: 83.4rem;
  margin: 0 auto;
`

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`
