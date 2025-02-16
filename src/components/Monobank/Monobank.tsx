import React, { useEffect, useState, useCallback } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// let styles = require("./monobank.module.css");
import * as styles from "./monobank.module.css";
import Button from "../ButtonComponent/ButtonComponent";
import axios from "axios";
import MonobankSocket from "./MonobankSocket";
import TransactionEvent from "./transactionEvent";
import { TransactionType } from "./types";

const Monobank = () => {
  const [statement, setStatement] = useState<any>(null);
  const [transaction, setTransaction] = useState<TransactionType | null>(null);
  const [loading, setLoading] = useState(true);

  console.log("styles", styles);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "monobank/jar.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const jar1 = getImage(data.file);

  useEffect(() => {
    const baseUrl = `https://${process.env.REACT_APP_BASE_URL}/api`;

    const fetchStatement = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/bank`);
        if (response.data && response.data.code !== 400) {
          setStatement(response.data);
        } else {
          console.error("Invalid response:", response.data);
        }

        console.log("Monobank", { response })

        setStatement(response.data);
      } catch (error) {
        console.error("Error fetching bank statement:", error);
      }
    };

    fetchStatement();
  }, []);

  const handleNewTransaction = useCallback((newTransaction: TransactionType) => {
    setTransaction(newTransaction);
  }, []);

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

  if (loading || !statement) return null;

  return (
    <div className={styles.container}>
      <MonobankSocket onTransaction={handleNewTransaction} />
      {transaction && <TransactionEvent transaction={transaction} />}
      <div className={styles.pattern} />
      <div className={styles.title}>Банка Монобанк</div>
      <div className={styles.main}>
        <div className={styles.jar}>
          {/* <img src={jar} alt="jar" /> */}
          {jar1 && <GatsbyImage image={jar1} alt="jar" className="jarImage" />}
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
