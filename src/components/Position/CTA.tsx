import React from "react";
let styles = require("./position.module.css");
import Button from "../ButtonComponent/ButtonComponent";

const CTA = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaText}>Якщо Ви потребуєте нашої допомоги, залишайте СВІЙ ЗАПИТ</div>
      <Button to="https://t.me/teplonaperedovu" variant="filled" theme="dark">
        Створити запит
      </Button>
    </div>
  );
};

export default CTA;
