import React from "react";
import { timeToDate } from "../utils/timeToDate";

interface Transaction {
  trans_id: string;
  trans_type: string;
  trans_amount: string;
  trans_date: number;
}

interface Statement {
  balance: string;
  transactions: Transaction[];
}

interface Props {
  statement: Statement;
}

const MonoUI: React.FC<Props> = ({ statement }) => {
  const isStatementTransactions = statement.transactions && statement.transactions.length > 0;
  return (
    <div>
      <h1>Монобанк</h1>
      <h2>Баланс: {statement.balance}</h2>
      { isStatementTransactions && (
        <>
          <h2>Список транзакцій</h2>
            <div style={{ height: '100px', overflowY: 'scroll' }}>
              {statement.transactions.map(item => (
                <div key={item.trans_id}>
                  <div>{item.trans_type} - {item.trans_amount} - {timeToDate(item.trans_date)}</div>
                </div>
              ))}
            </div>  
        </>
      )}
    </div>
  );
};
  

export default MonoUI;
