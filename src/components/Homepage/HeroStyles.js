import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as BP from '../../styles/breakPoints'

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // stretch to the full frame
  grid-template-rows: 1000px; // 350 pixels tall
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-content: center;
  justify-content: center;

  @media only screen and (max-width: ${BP.MAX_L}) {
    grid-template-rows: 100%; // 350 pixels tall
  }

  .banner-image-div {
    grid-area: 1 / 1 / 2 / 2;
  } // image
  .banner-text-div {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    place-self: center;
    text-align: center;
    place-items: center;
    display: inline-grid;
    max-width: 800px;

    @media only screen and (max-width: ${BP.MAX_L}) {
      display: none;
    }
  } // overlay objects like text, buttons, etc.
`

export const GoDownButton = styled(Link)`
  border: none;
  border-radius: 4px;
  background-color: transparent;
  padding: 5px 35px;
  margin: 2rem 0;
  display: flex;
  cursor: pointer;
  max-width: max-content;
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }

  span {
    color: #f8d8d9;
    text-decoration: none;
    font-family: 'Playfair Display', serif;
  }
`
