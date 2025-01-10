import React, { useEffect, useState } from "react";
let styles = require("./monobank.module.css");
import { TransactionType } from "./types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
// import coinSound from "../../sounds/coin-drop.mp3";
interface Props {
  transaction: TransactionType;
}

const TransactionEvent: React.FC<Props> = ({ transaction }) => {
  console.log("transaction, transaction.balance, transaction.trans_type", transaction, transaction.balance, transaction.transaction.trans_type);
  // console.log("coinSound", coinSound);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [audio] = useState(() => new Audio("/sounds/coin - drop.mp3)"));


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

  useEffect(() => {
    if (transaction) {
      setAnimationKey((prevKey) => prevKey + 1);
      audio.play().catch(err => console.log("Audio play error:", err));
    }
  }, [transaction, audio]);

  return (
    <>
      {transaction.transaction.trans_type === "Зарахування" && (
        <React.Fragment>
          <div key={`${animationKey}-amount`} className={`${styles.fadeinTrans} ${styles.transactionAmount}`}>
            {transaction.transaction.trans_type === "Зарахування" ? "+" : "-"}
            {transaction.transaction.trans_amount}
          </div>
          <div key={animationKey} className={`${styles.event} ${styles.fadeInMono}`}>
            {image && <GatsbyImage className={styles.coin} image={image} alt="Coin" />}
          </div>
        </React.Fragment>
      )}
    </>
  );
}

export default TransactionEvent;
