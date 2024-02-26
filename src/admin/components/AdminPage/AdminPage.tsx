import React, { useState, useEffect } from "react";
import AdminUI from './AdminUI'
import { removeAuthToken } from "../Login/authUtils";
import Login from "../Login/Login";

const Admin: React.FC = (props) => {
  
  // Отримання токену з локального сховища
  const authToken = localStorage.getItem('authToken')
  const formattedToken = authToken ? authToken.replace(/"/g, '') : '';
  const [isAuth, setIsAuth] = useState(false);
  const baseUrl = process.env.GATSBY_BACKEND_URL;

  useEffect(() => {
    // Перевірка наявності токену при кожному рендері компонента
    if (authToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [authToken]); 


  const handleSave = async (name: string, data: string) => {
    console.log('handleSave from AdminPage');
    console.log(name);
    console.log(data);
    const queryRequest = {
      email: "email?newEmail",
      telegram: "id-telegram?newIdTelegram",
      tokenTelegramBot: "token-telegram-bot?newTokenTelegramBot",
      tokenMonobank: "token-monobank?newTokenMonobank",
      password: "password"
    }

    let bodyContent;
    let apiUrl;
    if (name === 'password') {
      bodyContent = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      };

      apiUrl=`${baseUrl}/admin/password`;
    } else {
      bodyContent = {};
      apiUrl = `${baseUrl}/admin/${queryRequest[name]}=${data}`;
    }
        
    console.log(apiUrl)
    console.log(bodyContent)

    try {
      console.log(`Sending request to: ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${formattedToken}`,
        },
        body: JSON.stringify(bodyContent),
      });

      if (response.ok) {
        const responseData = await response.json()
        console.log(`Successfully saved settings`);
        console.log(responseData.message);
        console.log(responseData.code);
      } else {
          console.error(`Error saving settings for :`, response.status, response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleLogOut = () => {
    if (authToken) {
      removeAuthToken();
      setIsAuth(false);
    }
  }

  const onLoginSucces = () => {
    setIsAuth(true);
  }

  return isAuth ? <AdminUI handleSave={handleSave} handleLogOut={handleLogOut} {...props} /> : <Login onLoginSucces={onLoginSucces} />;
};

export default Admin;
