import React from "react";
let styles = require("./howwetowork.module.css");
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CTA from "./cta";

const HowWeToWork = () => {

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "img1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
      img2: file(relativePath: { eq: "img2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
      img3: file(relativePath: { eq: "img3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
      img5: file(relativePath: { eq: "img5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
      arrow: file(relativePath: { eq: "Arrow.png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, layout: CONSTRAINED)
        }
      }
    }
  `);
  
  const img1 = getImage(data.img1);
  const img2 = getImage(data.img2);
  const img3 = getImage(data.img3);
  const img5 = getImage(data.img5);
  const arrow = getImage(data.arrow);

  return (
    <>
      <div className={styles.container} id="howwetowork">
        <div className="title darkColor">Конвертуємо донати в перемогу</div>
        <div className={styles.stepsContainer}>
          <div className={styles.stepTitle}>
            Отримуємо <b>запит</b> від військових
          </div>
          <div className={`${styles.stepItem} ${styles.leftArrow}`}>
            <GatsbyImage image={img1} alt="img1" />
            <GatsbyImage image={arrow} alt="arrow" className={styles.arrow} />
          </div>
          <div className={styles.stepTitle}>
            Збираємо кошти через<b> донат</b>
          </div>
          <div className={`${styles.stepItem} ${styles.rightArrow}`}>
            <img src={img2} alt="img1" />
            <img src={arrow} alt="arrow" className={styles.arrow} />
          </div>
          <div className={styles.stepTitle}>
            <b>Закуповуємо та виготовляємо</b> необхідне
          </div>
          <div className={`${styles.stepItem} ${styles.leftArrow}`}>
            <img src={img3} className={styles.img} alt="img1" />
            <img src={arrow} alt="arrow" className={styles.arrow} />
          </div>
          <div className={styles.stepTitle}>
            <b>Передаємо</b> допомогу військовим
          </div>
          <div className={`${styles.stepItem} ${styles.rightArrow}`}>
            <img src={img5} alt="img1" />
            <img src={arrow} alt="arrow" className={styles.arrow} />
          </div>
          <div className={styles.stepTitle}>
            Обов'язковий <b>звіт</b>
          </div>
          <div className={`${styles.stepItem}`}>
            <img src={img1} alt="img1" />
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
};

export default HowWeToWork;
