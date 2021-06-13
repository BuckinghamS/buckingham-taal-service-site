import React from 'react'
import ReactMarkdown from 'react-markdown'
import parse from 'html-react-parser'
import {
  FooterContainer,
  FooterImage,
  FooterWrapper,
  LeftFooter,
  MenuItem,
  MenuWrapper,
  PoweredByFooter,
  RightFooter,
} from './footerStyles'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const CODE_ROBBERT = 'Code by Robbert Tuerlings'
const DESIGN_RUTH = 'Design by Ruth Mollema'

const Footer = () => {
  const FooterData = useStaticQuery(graphql`
    {
      footer: contentfulFooter {
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        footerDetailsLeft {
          footerDetailsLeft
        }
        footerDetailsRight {
          footerDetailsRight
        }
        footerMenu {
          navLink
          navName
        }
      }
    }
  `)
  const { footerMenu, logo, footerDetailsLeft, footerDetailsRight } =
    FooterData.footer

  const footerImage = {
    img: logo.localFile?.childImageSharp?.gatsbyImageData,
    alt: 'Buckingham Taalservice',
  }

  const menu =
    footerMenu && footerMenu.length > 0
      ? footerMenu.map((item, index) => (
          <MenuItem key={index} to={item.navLink}>
            <span>{parse(item.navName)}</span>
          </MenuItem>
        ))
      : null

  return (
    <FooterWrapper>
      <FooterContainer>
        {footerImage && (
          <FooterImage to="/" className="footer-link">
            <GatsbyImage
              image={footerImage.img}
              alt={footerImage.alt}
              // className="footer-image--height"
            />
          </FooterImage>
        )}
        {footerDetailsLeft && (
          <LeftFooter>
            <ReactMarkdown>{footerDetailsLeft.footerDetailsLeft}</ReactMarkdown>
          </LeftFooter>
        )}
        {footerDetailsRight && (
          <RightFooter>
            <ReactMarkdown>
              {footerDetailsRight.footerDetailsRight}
            </ReactMarkdown>
          </RightFooter>
        )}
        {menu && <MenuWrapper>{menu}</MenuWrapper>}
      </FooterContainer>
      <PoweredByFooter>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/robberttuerlings"
        >
          {CODE_ROBBERT}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ruth-mollema-218083ba/"
        >
          {DESIGN_RUTH}
        </a>
      </PoweredByFooter>
    </FooterWrapper>
  )
}

export default Footer
