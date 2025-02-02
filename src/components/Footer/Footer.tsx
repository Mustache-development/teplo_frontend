import React from "react";
let styles = require("./footer.module.css");
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "footer/logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, placeholder: TRACED_SVG)
        }
      },
      instagram: file(relativePath: { eq: "footer/instagram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, placeholder: TRACED_SVG)
        }
      },
      telegram: file(relativePath: { eq: "footer/telegram.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, placeholder: TRACED_SVG)
        }
      },
      facebook: file(relativePath: { eq: "footer/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, placeholder: TRACED_SVG)
        }
      }
    }
  `)

  const logoImage = getImage(data.logo);
  const instagramImage = getImage(data.instagram);
  const telegramImage = getImage(data.telegram);
  const facebookImage = getImage(data.facebook);
  return (
    <div className={styles.container}>
      {logoImage && <GatsbyImage image={logoImage} alt="logo" className={styles.logo} />}
      <a href="https://send.monobank.ua/jar/pAH2wwD8n" target="_blank">
        <div className={styles.cta}>Зробити донат</div>
      </a>
      <div className={styles.ancors}>
        <div className={styles.email}>teplonaperedovu@gmail.com</div>
        <div className={styles.socialLinks}>
          <div className={styles.socIcons}>
            <a href="https://www.instagram.com/artem_ruban84/" target="_blank" rel="noopener noreferrer">
              {instagramImage && <GatsbyImage image={instagramImage} alt="instagram" className={styles.socIcon} />}            </a>

            <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
              {telegramImage && <GatsbyImage image={telegramImage} alt="telegram" className={styles.socIcon} />}            </a>
            <a href="https://www.facebook.com/artem.ruban.3" target="_blank" rel="noopener noreferrer">
              {facebookImage && <GatsbyImage image={facebookImage} alt="facebook" className={styles.socIcon} />}            </a>
          </div>
        </div>
      </div>

      <div className={styles.ancors}>
        <a href="team/" target="_blank">
          <div className={styles.admin}>Команда розробки</div>
        </a>
        <a href="admin/" target="_blank">
          <div className={styles.admin}>Адміністративна панель</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
