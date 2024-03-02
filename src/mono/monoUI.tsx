import React from "react";

interface Transaction {
  trans_id: string;
  trans_type: string;
  trans_amount: string;
  trans_date: number;
}

interface Statement {
  balance: string;
}

interface Props {
  statement: Statement;
}

const MonoUI: React.FC<Props> = ({ statement }) => {
  return (
    <div>
      <h2>Баланс: {statement.balance}</h2>
      
      
      
    </div>
  );
};

export default MonoUI;
