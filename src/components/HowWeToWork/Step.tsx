let styles = require('./howwetowork.module.css');
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"


interface StepProps {
  title: string;
  img: string;
}

const Step: React.FC<StepProps> = ({ title, img }) => {
  
  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepTitle}>
        {title}
      </div>
      <div className={styles.img}>
        <StaticImage src="img1.png" alt="A dinosaur" />
      </div>
    </div>
  );
};

export default Step;
