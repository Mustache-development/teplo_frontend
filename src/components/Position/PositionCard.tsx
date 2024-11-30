import React from "react";
let styles = require("./position.module.css");
import Button from "../ButtonComponent/ButtonComponent";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface PositionCardProps {
  name: string;
  img: IGatsbyImageData;
  text: string;
  button: string;
}

const PositionCard: React.FC<PositionCardProps> = ({ name, img, text, button }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <GatsbyImage image={img} alt="123" className={styles.cardImg} />
      <p className={styles.cardText} lang="uk">
        {text}
      </p>
      <div className={styles.buttonContainer}>
        <Button to="https://send.monobank.ua/jar/pAH2wwD8n" variant="filled" theme="light">
          {button}
        </Button>
      </div>
    </div>
  );
};

export default PositionCard;
