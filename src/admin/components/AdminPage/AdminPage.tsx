import React, { useState, useEffect } from "react";
import AdminUI from "./AdminUI";
import { removeAuthToken } from "../Login/authUtils";
import Login from "../Login/Login";

const Admin: React.FC = (props) => {
  // Отримання токену з локального сховища
  const authToken = localStorage.getItem("authToken");
  const formattedToken = authToken ? authToken.replace(/"/g, "") : "";
  const [isAuth, setIsAuth] = useState(false);
  const baseUrl = `https://${process.env.REACT_APP_BASE_URL}/api`;
  // const baseUrl = "https://teplo-back.onrender.com/api";

  const handleAuthFail = (resposeCode: number | string): void => {
    if (resposeCode === 401 || resposeCode === "401") {
      handleLogOut();
    }
  };

  useEffect(() => {
    // Is authToken in localStorage
    if (authToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [authToken]);

  // is auth true
  useEffect(() => {
    const authVerify = async (authToken: string) => {
      const apiUrl = `${baseUrl}/auth/verify`;

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.code !== 200) {
            localStorage.removeItem("authToken");
            window.location.replace("/admin");
          }
          if (data.code === 2000) {
          }
        } else {
        }
      } catch (error) {
      }
    };

    authVerify(formattedToken);
  }, [formattedToken]);

  // send token to monobank
  const [isJarsLoading, setIsJarsLoading] = useState<boolean>(false);
  const [isJarIdLoading, setIsJarIdLoading] = useState<{ [key: string]: boolean }>({});

  interface MonoJars {
    id: string;
    title: string;
  }

  const [monoJars, setMonoJars] = useState<MonoJars[]>([]);

  const sendMonoToken = async (data: string) => {
    const apiUrl = `${baseUrl}/admin/token-monobank`;
    const bodyContent = { token: data };
    setIsJarsLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${formattedToken}`,
        },
        body: JSON.stringify(bodyContent),
      });
      setIsJarsLoading(false);

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.code !== 200) {
          handleNetworkRequest("помилка у токені", false);
        } else {
          handleAuthFail(responseData.code);
          setMonoJars(responseData.jars);
        }
      } else {
        handleNetworkRequest("дані не збережено", false);
      }
    } catch (error) {
    }
  };

  const sendJarID = async (data: string) => {
    const apiUrl = `${baseUrl}/admin/jar-monobank`;
    const bodyContent = { jarId: data };
    setIsJarIdLoading((prevState) => ({
      ...prevState,
      [data]: true,
    }));
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${formattedToken}`,
        },
        body: JSON.stringify(bodyContent),
      });
      setIsJarIdLoading((prevState) => ({
        ...prevState,
        [data]: false,
      }));

      if (response.ok) {
        const responseData = await response.json();
        responseData.code === 200
          ? handleNetworkRequest("дані успішно збережені", true)
          : handleNetworkRequest("дані не збережено", false);
      } else {
        handleNetworkRequest("дані не збережено", false);
      }
    } catch (error) {
    }
  };

  interface SnackbarData {
    open: boolean;
    text: string;
    isSuccess: boolean;
  }

  const [snackbarData, setSnackbarData] = useState<SnackbarData>({ open: false, text: "", isSuccess: true });

  const handleNetworkRequest = (text: string, isSuccess: boolean) => {
    setSnackbarData({
      open: true,
      text: text,
      isSuccess: isSuccess,
    });
    snackbarData.text = text;
    snackbarData.isSuccess = isSuccess;
  };

  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({
    email: false,
    telegram: false,
    tokenTelegramBot: false,
    tokenMonobank: false,
    password: false,
  });

  const handleSave = async (name: string, data: string) => {
    setIsLoading((prevState) => ({
      ...prevState,
      [name]: true,
    }));

    const queryRequest = {
      email: "email?newEmail",
      telegram: "id-telegram?newIdTelegram",
      tokenTelegramBot: "token-telegram-bot?newTokenTelegramBot",
      password: "password",
    };

    let bodyContent;
    let apiUrl;
    if (name === "password") {
      bodyContent = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      };

      apiUrl = `${baseUrl}/admin/password`;
    } else {
      bodyContent = {};
      apiUrl = `${baseUrl}/admin/${queryRequest[name]}=${data}`;
    }


    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${formattedToken}`,
        },
        body: JSON.stringify(bodyContent),
      });

      setIsLoading((prevState) => ({
        ...prevState,
        [name]: false,
      }));

      if (response.ok) {
        const responseData = await response.json();
        handleAuthFail(responseData.code);
        responseData.code == 200
          ? handleNetworkRequest("дані успішно збережені", true)
          : handleNetworkRequest("дані не збережено", false);
      } else {
        handleNetworkRequest("відбулась помилка", false);
      }
    } catch (error) {
    }
  };

  const handleLogOut = () => {
    if (authToken) {
      removeAuthToken();
      setIsAuth(false);
    }
  };

  const onLoginSucces = () => {
    setIsAuth(true);
  };

  return isAuth ? (
    <AdminUI
      handleSave={handleSave}
      handleLogOut={handleLogOut}
      sendMonoToken={sendMonoToken}
      monoJars={monoJars}
      isLoading={isLoading}
      isJarsLoading={isJarsLoading}
      isJarIdLoading={isJarIdLoading}
      sendJarId={sendJarID}
      snackbarData={snackbarData}
      setSnackbarData={setSnackbarData}
      {...props}
    />
  ) : (
    <Login onLoginSucces={onLoginSucces} />
  );
};

export default Admin;
