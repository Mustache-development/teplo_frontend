import React from "react";
let styles = require("./howwetowork.module.css");
import CTA from "./cta";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img5 from "./img5.png";
import arrow from "./Arrow.png";

const HowWeToWork = () => {
  return (
    <>
      <div className={styles.container} id="howwetowork">
        <div className="title darkColor">Конвертуємо донати в перемогу</div>
        <div className={styles.stepsContainer}>
        <div className={styles.stepItem}>
          <div className={styles.stepTitle}>Отримуємо <b>запит</b> від військових</div>
          <img src={img1} alt="img1" />
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </div>
        <div className={styles.stepItem}>
          <div className={styles.stepTitle}>Збираємо кошти через<b> донат</b></div>
          <img src={img2} alt="img1" />
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </div>
        <div className={styles.stepItem}>
          <div className={styles.stepTitle}><b>Закуповуємо та виготовляємо</b> необхідне</div>
          <img src={img3} className={styles.img} alt="img1" />
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </div>
        <div className={styles.stepItem}>
          <div className={styles.stepTitle}><b>Передаємо</b> допомогу військовим</div>
          <img src={img5} alt="img1" />
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </div>
        <div className={styles.stepItem}>
          <div className={styles.stepTitle}>Обов'язковий <b>звіт</b></div>
          <img src={img1} alt="img1" />
        </div>
      </div>
      </div>
      <CTA />
    </>
  );
};

export default HowWeToWork;
