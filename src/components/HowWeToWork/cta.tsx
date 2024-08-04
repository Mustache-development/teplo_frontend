import React from "react";
let styles = require("./howwetowork.module.css");
import Button from "../ButtonComponent/ButtonComponent";

function CTA() {
  return (
    <div className={styles.ctaContainer}>
      <Button to="https://send.monobank.ua/jar/pAH2wwD8n" variant="filled" theme="dark">
        Підтримати
      </Button>
      <Button to="https://t.me/teplonaperedovu" variant="outlined" theme="dark">
        Стати волонтером
      </Button>
    </div>
  );
}

// https://send.monobank.ua/jar/pAH2wwD8n
// https://t.me/teplonaperedovu
export default CTA;
