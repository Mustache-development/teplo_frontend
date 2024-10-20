import React, { useEffect, useState } from "react";
let styles = require("./monobank.module.css");
import { TransactionType } from "./types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
  transaction: TransactionType;
}

const TransactionEvent: React.FC<Props> = ({ transaction }) => {
  console.log("transaction", transaction);
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
    if (transaction) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [transaction]);

  return (
    <>
      <div key={`${animationKey}-amount`} className={`${styles.fadeinTrans} ${styles.transactionAmount}`}>
        {transaction.transaction.trans_type === "Зарахування" ? "+" : "-"}
        {transaction.transaction.trans_amount}
      </div>
      <div key={animationKey} className={`${styles.event} ${styles.fadeInMono}`}>
        {image && <GatsbyImage className={styles.coin} image={image} alt="Coin" />}
      </div>
    </>
  );
};

export default TransactionEvent;
