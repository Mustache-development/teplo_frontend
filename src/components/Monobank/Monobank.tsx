import React, { useEffect, useState } from "react";
let styles = require("./monobank.module.css");
import jar from "./jar.png";
import Button from "../ButtonComponent/ButtonComponent";
import axios from "axios";
import MonobankSocket from "./MonobankSocket";

const Monobank = () => {
  const [statement, setStatement] = useState<any>(null);

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const fetchStatement = async () => {
      try {
        const response = await axios.get(`${baseUrl}/bank`);

        setStatement(response.data);
        console.log(response.data);
        // console.log(response.data.transactions)
      } catch (error) {
        console.error("Error fetching bank statement:", error);
      }
    };

    fetchStatement();
  }, []);

  const handleNewTransaction = (newTransaction: any) => {
    setStatement((prevStatement: any) => ({
      ...prevStatement,
      transactions: [...(prevStatement?.transactions || []), newTransaction],
      balance: newTransaction.balance,
    }));
  };

  const calculateProgressTextPercentage = (balance: number, goal: number) => {
    const minPercentage = 20;
    const maxPercentage = 70;
    const rawPercentage = (balance / goal) * 100;
    return Math.max(minPercentage, Math.min(rawPercentage, maxPercentage));
  };

  const calculateProgresBarPercentage = (balance: number, goal: number) => {
    const percent = Math.max(0, Math.min((balance / goal) * 100, 100));
    const result = 100 - percent;
    console.log("calculateProgresBarPercentage", percent, result);
    return result;
  };

  const progressTextPercentage = statement ? calculateProgressTextPercentage(statement.balance, 60000) : 0;
  const progressBarPercentage = statement ? calculateProgresBarPercentage(statement.balance, 60000) : 0;
  console.log("progressBarPercentage", progressBarPercentage);

  return (
    <div className={styles.container}>
      <MonobankSocket onTransaction={handleNewTransaction} />
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
          <div
            className={styles.progressMask}
            style={{ "--progress-width": `${progressBarPercentage}%` } as React.CSSProperties}
          ></div>
          {/* <svg className={styles.SVG} width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M0,30 H100 Q90,15 100,30 H0 Z" fill="#e0e0e0" />
          </svg> */}
        </div>
        <div className={styles.progressText}>
          <div className={styles.start}>0</div>
          <div className={styles.current} style={{ left: `${progressTextPercentage}%`, transform: "translateX(-50%)" }}>
            {statement?.balance}
          </div>
          <div className={styles.end}>60 000</div>
        </div>
      </div>
    </div>
  );
};

export default Monobank;
