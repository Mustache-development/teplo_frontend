import React, { useEffect } from "react";
import io from "socket.io-client";

type MonobankSocketProps = {
  onTransaction: (data: any) => void;
};

const MonobankSocket: React.FC<MonobankSocketProps> = ({ onTransaction }) => {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_BASE_URL!, {
      // const socket = io("https://localhost:3000", {
      transports: ["websocket"],
    });

    socket.on("bankWebHook", (data) => {
      console.log("Отримано нову транзакцію:", data);
      onTransaction(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [onTransaction]);

  return null;
};

export default MonobankSocket;
