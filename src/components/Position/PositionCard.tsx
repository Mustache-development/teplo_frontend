import React from "react";
let styles = require("./position.module.css");
import Button from "../ButtonComponent/ButtonComponent";

interface PositionCardProps {
  name: string;
  img: string;
  text: string;
  button: string;
}

const PositionCard: React.FC<PositionCardProps> = ({ name, img, text, button }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <img src={img} alt={name} className={styles.cardImg} />
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
