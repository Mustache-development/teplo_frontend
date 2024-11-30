import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
let styles = require("./ourTeam.module.css");

interface TeamCardProps {
  name: string;
  img: IGatsbyImageData | null;
  text: string;
  button: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, img, text, button }) => {
  return (
    <div className={styles.cardContainer}>
      {img ? (
        <GatsbyImage image={img} alt={name} />
      ) : (
        <div>Зображення відсутнє</div> 
      )}
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.role}>{text}</p>
    </div>
  );
};

export default TeamCard;
