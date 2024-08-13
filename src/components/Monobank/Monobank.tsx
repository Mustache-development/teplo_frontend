import React, { useEffect, useState } from "react";
let styles = require("./monobank.module.css");
import jar from "./jar.png";
import Button from "../ButtonComponent/ButtonComponent";
import axios from "axios";

const Monobank = () => {
  const [statement, setStatement] = useState<any>(null);

  useEffect(() => {
    console.log("monobank useEffect");
    const fetchStatement = async () => {
      try {
        const response = await axios.get("https://teplo-backend.onrender.com/api/bank");

        setStatement(response.data);
        console.log(response.data);
        // console.log(response.data.transactions)
      } catch (error) {
        console.error("Error fetching bank statement:", error);
      }
    };

    fetchStatement();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pattern} />
      <div className={styles.title}>Банка Монобанк</div>
      <div className={styles.main}>
        <div className={styles.jar}>
          <img src={jar} alt="jar" />
        </div>
        <div className={styles.description}>
          <div className={styles.headline}>Наближаємо перемогу разом!</div>
          <div className={styles.text}>Наша тижнева мета -{"\n"} 60 000 грн.</div>
          <div className={styles.cta}>
            <Button to="https://send.monobank.ua/jar/pAH2wwD8n" variant="filled" theme="dark">
              Поповнити банку
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}>
          <div className={styles.currentProgress} />
          {/* <div className={styles.progressMask}></div> */}
          <svg className={styles.SVG} width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M0,30 H100 Q90,15 100,30 H0 Z" fill="#e0e0e0" />
          </svg>
        </div>
        <div className={styles.progressText}>
          <div className={styles.start}>0</div>
          <div className={styles.current}>20 000</div>
          <div className={styles.end}>60 000</div>
        </div>
      </div>
    </div>
  );
};

export default Monobank;
