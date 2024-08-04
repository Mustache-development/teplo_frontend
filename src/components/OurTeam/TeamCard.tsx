import React from "react";
let styles = require("./ourTeam.module.css");

interface TeamCardProps {
  name: string;
  img: string;
  text: string;
  button: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, img, text, button }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={img} alt="123" className={styles.cardImg} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.role}>{text}</p>
    </div>
  );
};

export default TeamCard;
