import React, { useEffect, useState } from "react";
let styles = require("./monobank.module.css");
import { TransactionType } from "./types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
// @ts-ignore
import coinSound from "../../sound/coin-drop.mp3";

interface Props {
  transaction: TransactionType;
}

const TransactionEvent: React.FC<Props> = ({ transaction }) => {
  console.log("transaction", transaction);
  const [audio] = useState(() => new Audio(coinSound))
  const [animationKey, setAnimationKey] = useState<number>(0);

  const dataCoin = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "monobank/coin.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 20)
        }
      }
    }
  `);

  const image = getImage(dataCoin.file);
  console.log("transaction event image", image);

  useEffect(() => {
    if (transaction && transaction.transaction.trans_type === "Зарахування") {
      setAnimationKey((prevKey) => prevKey + 1);
      audio.play().catch(err => console.log("Audio play error:", err));
    }
  }, [transaction, audio]);

  return transaction.transaction.trans_type === "Зарахування" ? (
    <>
      <div key={`${animationKey}-amount`} className={`${styles.fadeinTrans} ${styles.transactionAmount}`}>
        {transaction.transaction.trans_type === "Зарахування" ? "+" : "-"}
        {transaction.transaction.trans_amount}
      </div>
      <div key={animationKey} className={`${styles.event} ${styles.fadeInMono}`}>
        {image && <GatsbyImage className={styles.coin} image={image} alt="Coin" />}
      </div>
    </>
  ) : null;
};

export default TransactionEvent;
