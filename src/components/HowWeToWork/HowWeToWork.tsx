import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

let styles = require("./howwetowork.module.css");
import CTA from "./cta";

interface ImageNode {
  node: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
}

interface QueryData {
  allFile: {
    edges: ImageNode[];
  };
}

interface Step {
  text: string;
  image: string;
}

const stepsData: Step[] = [
  {
    text: "Отримуємо <b>запит</b> від військових",
    image: "img1",
  },
  {
    text: "Збираємо кошти через <b>донат</b>",
    image: "img2",
  },
  {
    text: "<b>Закуповуємо</b> та виготовляємо необхідне",
    image: "img3",
  },
  {
    text: "<b>Передаємо</b> допомогу військовим",
    image: "img5",
  },
  {
    text: "Обов'язковий <b>звіт</b>",
    image: "img1",
  },
];

const HowWeToWork = () => {
  const data = useStaticQuery<QueryData>(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "howWeToWork" } }) {
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

  const images: { [key: string]: IGatsbyImageData } = data.allFile.edges.reduce(
    (acc: { [key: string]: IGatsbyImageData }, { node }) => {
      acc[node.name] = node.childImageSharp.gatsbyImageData;
      return acc;
    },
    {}
  );

  console.log("images", images);

  return (
    <>
      <div className={styles.container} id="howwetowork">
        <div className="title darkColor">Конвертуємо донати в перемогу</div>
        <div className={styles.stepsContainer}>
          {stepsData.map((step, index) => {
            return (
              <div key={index}>
                <div
                  className={styles.stepTitle}
                  dangerouslySetInnerHTML={{ __html: step.text }}
                />{" "}
                <div className={styles.stepItem}>
                  <GatsbyImage
                    className={styles.img}
                    image={images[step.image]}
                    alt={`Image ${index + 1}`}
                  />
                  {index + 1 < stepsData.length && (
                    <GatsbyImage image={images.arrow} alt="Arrow" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CTA />
    </>
  );
};

export default HowWeToWork;
