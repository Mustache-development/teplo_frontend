import React from "react";
let styles = require("./footer.module.css");
import logo from "./logo.png";
import instagram from "./instagram.png";
import telegram from "./telegram.png";
import facebook from "./facebook.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <a href="https://send.monobank.ua/jar/pAH2wwD8n" target="_blank">
        <div className={styles.cta}>Зробити донат</div>
      </a>
      <div className={styles.ancors}>
        <div className={styles.email}>teplonaperedovu@gmail.com</div>
        <div className={styles.socialLinks}>
          <div className={styles.socIcons}>
            <a href="https://www.instagram.com/artem_ruban84/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className={styles.socIcon} />
            </a>

            <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="telegram" className={styles.socIcon} />
            </a>
            <a href="https://www.facebook.com/artem.ruban.3" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className={styles.socIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.ancors}>
        <div className={styles.admin}>Команда розробки</div>
        <div className={styles.admin}>Адміністративна панель</div>
      </div>
    </div>
  );
};

export default Footer;
