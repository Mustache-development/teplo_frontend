import React from "react";
import HeadLine from "./HeadLine";
import Hero from "./../Hero/Hero";
let styles = require("./header.module.css");
import { graphql, useStaticQuery } from "gatsby";

const Header: React.FC = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "head/first-display-background.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const imageUrl =
    data.file.childImageSharp.gatsbyImageData.images.fallback.src;

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "430px auto",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeadLine />
      <Hero />
    </div>
  );
};

export default Header;
