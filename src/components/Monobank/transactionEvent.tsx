import React, { useEffect, useState } from "react";
let styles = require("./monobank.module.css");
import { TransactionType } from "./types";

interface Props {
  transaction: TransactionType;
}

const TransactionEvent: React.FC<Props> = ({ transaction }) => {
  console.log("transaction", transaction);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    if (transaction) {
      // Оновлюємо ключ анімації для перезапуску
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [transaction]);

  return (
    <>
      <div
        key={animationKey} // Використовуємо ключ для перезапуску анімації
        className={`${styles.event} ${styles.fadeInMono}`}
      >
        {transaction.transaction.trans_type === "Зарахування" ? "+" : "-"}
        {transaction.transaction.trans_amount}
      </div>
    </>
  );
};

export default TransactionEvent;
