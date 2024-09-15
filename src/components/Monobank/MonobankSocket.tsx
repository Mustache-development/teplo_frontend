import React, { useEffect } from "react";
import io from "socket.io-client";

type MonobankSocketProps = {
  onTransaction: (data: any) => void;
};

const MonobankSocket: React.FC<MonobankSocketProps> = ({ onTransaction }) => {
  useEffect(() => {
    console.log("creating socket");
    const socket = io("wss://teplo-backend.onrender.com", {
      // const socket = io("ws://localhost:3000", {
      path: "",
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
