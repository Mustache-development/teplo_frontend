import React, { PropsWithChildren } from "react";
import HeadLine from "./HeadLine";
import Hero from "./../Hero/Hero";
let styles = require("./header.module.css");
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby";

interface HeaderWrapperProps {
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  children: React.ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = styled.div`
  width: 100%;
  height: 100%;
  background-size: 430px auto;
  background-position: top;
  background-repeat: no-repeat;

  /* Desktop 1024px - 1440px */
  background-image: url(${props => props.desktopImage});
  background-size: 1440px 664px;
  background-position: top left;

  // /* Tablet 1000px-1439px */
  // @media (max-width: 1439px) and (min-width: 1000px) {
  //   background-image: url(${props => props.tabletImage});
  // }

  /* Mobile < 1000px */
  @media (max-width: 999px) {
    background-image: url(${props => props.mobileImage});
  }
    `

const Header: React.FC = ({ }) => {
  const data = useStaticQuery(graphql`
      query {
        desktop: file(relativePath: { eq: "head/first-display-background-desktop.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        tablet: file(relativePath: { eq: "head/first-display-background-tablet.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        mobile: file(relativePath: { eq: "head/first-display-background-mobile.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `)

  const desktopSrc = data.desktop.childImageSharp.gatsbyImageData.images.fallback.src
  const tabletSrc = data.tablet.childImageSharp.gatsbyImageData.images.fallback.src
  const mobileSrc = data.mobile.childImageSharp.gatsbyImageData.images.fallback.src

  return (
    <HeaderWrapper
      desktopImage={desktopSrc}
      tabletImage={tabletSrc}
      mobileImage={mobileSrc}
    >
      <HeadLine />
      <Hero />
    </HeaderWrapper>
  );
};

export default Header;
