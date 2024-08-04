import React from "react";
let styles = require("./donators.module.css");

interface CardDonatorProps {
  text: string;
  img: string;
}
const CardDonator: React.FC<CardDonatorProps> = ({ text, img }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={img} alt="123" className={styles.cardImg} />
      <div className={styles.cardText}>{text}</div>
    </div>
  );
};

export default CardDonator;
