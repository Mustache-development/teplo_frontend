import React, { useState, useEffect } from "react";
import axios from "axios";
import MonoUI from "./monoUI";

const MonoService: React.FC = () => {
  const [statement, setStatement] = useState<any>(null);

  useEffect(() => {
    const fetchStatement = async () => {
      try {
        const url = "https://teplo-back.onrender.com/api/bank";
        const response = await axios.get(url); 

        setStatement(response.data);
      } catch (error) {
      }

    };

    const monoJars = async () => {
        try {
          const response = await axios.post("https://teplo-back.onrender.com/api/bankWebHook");
  
          
        } catch (error) {
        }
      }

    monoJars()
    fetchStatement();
  }, []);

  return <>{statement && <MonoUI statement={statement} />}</>;
};

export default MonoService;
