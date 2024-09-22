import React from "react";
// let styles = require("./aboutproject.module.css");
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./aboutproject.module.css";

interface AboutProjectProps {}

const AboutProject: React.FC<AboutProjectProps> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      aboutProjectBackground: file(name: { eq: "aboutProjectBackground" }) {
        publicURL
      }
      pattern: file(name: { eq: "pattern" }) {
        childImageSharp {
          gatsbyImageData(width: 342, height: 258)
        }
      }
    }
  `);

  const backgroundImage = data.aboutProjectBackground.publicURL;
  const patternImage = getImage(data.pattern.childImageSharp);

  return (
    <section className={styles.container} id="about">
      <div className={styles.title}>Про проєкт</div>
      <div className={styles.description}>
        “Тепло на передову” - волонтерська ініціатива, яка діє з початку повномасштабного вторгнення. Місце розташування
        - Дніпро. З самого початку рух організував виготовлення буржуйок, які доставлялися різним підрозділам.
        Знаходились виробники, перевізники, постачальники матеріалів. З настанням теплої пори року потреба в буржуйках
        зменшилась і проект почав брати на себе нові задачі. На даний момент відбувається пошив і постачання м’яких
        ношів, газових балонів, лопат. Протягом тижня відбувається збір коштів, закупка і виготовлення. Кожної суботи
        відбувається відправка з Дніпра в точки призначення.
      </div>
      <a href="#detailed" className={styles.buttonDetailed}>
        Детальніше
      </a>
      <style>{`
        .${styles.container}::before {
          background-image: url(${backgroundImage});
        }
      `}</style>
    </section>
  );
};

export default AboutProject;
