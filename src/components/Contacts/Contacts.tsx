import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
let styles = require("./contacts.module.css");
import telegram from "./telegram.png";
import fb_messenger from "./fb_messenger.png";
import instagram from "./instagram.png";
import gmail from "./gmail.png";

const Contacts = () => {
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
  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.text}>
          Будьте з нами на зв’язку! Приєднуйтесь до наших соціальних мереж, спостерігайте за життям нашого
          волонтерського руху та ставайте його частиною!
        </div>
        <div className={styles.buttonsContainer}>
          <a href="https://www.instagram.com/artem_ruban84/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className={styles.socIcon} />
          </a>
          <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
            <img src={telegram} alt="telegram" className={styles.socIcon} />
          </a>
          <a href="https://m.me/artem.ruban.3" target="_blank" rel="noopener noreferrer">
            <img src={fb_messenger} alt="fb_messenger" className={styles.button} />
          </a>
          <a href="mailto:teplonaperedovu@gmail.com">
            <img src={gmail} alt="gmail" className={styles.button} />
          </a>
        </div>
      </div>
      <div className={styles.cta}>
        Допоможіть нашій справі! {<br />}
        {<br />}Навіть найменший донат або репост - це вже велика допомога. Зробіть репост, щоб більша кількість людей
        побачила наш збір, і ми мали можливість швидше надавати підтримку нашим військовим!
      </div>
    </>
  );
};

export default Contacts;
