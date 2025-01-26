import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
let styles = require("./stat.module.css");

interface StatProps { }

interface Edge {
  node: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
}

interface Img {
  name: string;
  image: IGatsbyImageData | undefined;
}

const Stat: React.FC<StatProps> = ({ }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "stat" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
            name
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map((edge: Edge) => ({
    name: edge.node.name,
    image: getImage(edge.node.childImageSharp),
  }));

  const bg1 = images.find((img: Img) => img.name === "img1")?.image;
  const bg2 = images.find((img: Img) => img.name === "img2")?.image;
  const bg3 = images.find((img: Img) => img.name === "img3")?.image;

  interface BlockProps {
    image: IGatsbyImageData | undefined;
    number: string;
    name: string;
  }

  const StatBlock: React.FC<BlockProps> = ({ image, number, name }) => {
    const backgroundImage = image?.images?.fallback?.src ? `url(${image.images.fallback.src})` : "none";

    return (
      <div className={styles.block} style={{ backgroundImage }}>
        <div className={styles.number}>{number}</div>
        <div className={styles.name}>{name}</div>
      </div>
    );
  };

  return (
    <section className={styles.container} id="stat">
      <StatBlock image={bg1} number="380+" name="Закритих запитів" />
      <StatBlock image={bg2} number="27" name="Військових підрозділів" />
      <StatBlock image={bg3} number="40+" name="Постійних донатерів" />
    </section>
  );
};

export default Stat;
