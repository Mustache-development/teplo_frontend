import React, { useState, useEffect } from "react";
import axios from "axios";
import MonoUI from "./monoUI";

const MonoService: React.FC = () => {
  const [statement, setStatement] = useState<any>(null);

  useEffect(() => {
    const fetchStatement = async () => {
      try {
        const response = await axios.get("https://teplo-back.onrender.com/api/bank"); // Маршрут для запиту на ваш бекенд

        setStatement(response.data);
        console.log(response.data)
        // console.log(response.data.transactions)
      } catch (error) {
        console.error("Error fetching bank statement:", error);
      }

    };

    const monoJars = async () => {
        try {
          const response = await axios.post("https://teplo-back.onrender.com/api/bankWebHook");
  
          
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching bank statement:", error);
        }
      }

    monoJars()
    fetchStatement();
  }, []);

  return <>{statement && <MonoUI statement={statement} />}</>;
};

export default MonoService;
