import React from "react";
let styles = require("./aboutproject.module.css");

interface AboutProjectProps {}

const AboutProject: React.FC<AboutProjectProps> = ({}) => {
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
    </section>
  );
};

export default AboutProject;
