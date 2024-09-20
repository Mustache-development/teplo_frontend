import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
let styles = require("./stat.module.css");

interface StatProps {}

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
  image: IGatsbyImageData | undefined; // Зображення може бути undefined, якщо не знайдено
}

const Stat: React.FC<StatProps> = ({}) => {
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

  return (
    <section className={styles.container} id="stat">
      <div className="title darkColor">Наші досягнення</div>
      <div className={`${styles.block}`} style={{ backgroundImage: `url(${bg1?.images.fallback.src})` }}>
        <div className={styles.number}>300+</div>
        <div className={styles.name}>Закритих запитів</div>
      </div>
      <div className={`${styles.block}`} style={{ backgroundImage: `url(${bg2?.images.fallback.src})` }}>
        <div className={styles.number}>23</div>
        <div className={styles.name}>Військових підрозділів</div>
      </div>
      <div className={`${styles.block}`} style={{ backgroundImage: `url(${bg3?.images.fallback.src})` }}>
        <div className={styles.number}>40+</div>
        <div className={styles.name}>Постійних донатерів</div>
      </div>
    </section>
  );
};

export default Stat;
