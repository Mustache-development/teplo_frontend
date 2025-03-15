import React, { useEffect } from "react";
import io from "socket.io-client";

type MonobankSocketProps = {
  onTransaction: (data: any) => void;
};

const MonobankSocket: React.FC<MonobankSocketProps> = ({ onTransaction }) => {
  useEffect(() => {
    const socket = io(`wss://${process.env.REACT_APP_BASE_URL}`, {
      // const socket = io("ws://localhost:3000", {
      path: "",
      transports: ["websocket"],
    });

    socket.on("bankWebHook", (data) => {
      onTransaction(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [onTransaction]);

  return null;
};

export default MonobankSocket;
