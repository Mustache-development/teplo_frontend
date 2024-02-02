import React, {useState} from "react";
import { Link } from "gatsby";
import AdminUI from './AdminUI'
import { removeAuthToken } from "../Login/authUtils";
import Login from "../Login/Login";

const Admin: React.FC = (props) => {
  
  // Отримання токену з локального сховища
  const authToken = localStorage.getItem('authToken');
  const formattedToken = authToken ? authToken.replace(/"/g, '') : '';
  const [isAuth, setIsAuth] = useState(false);


  const handleSave = async (data: any) => {
    console.log('handleSave from AdminPage');
    console.log(authToken);

    try {
      const apiUrl = `https://teplo-back.onrender.com/api/admin/email?newEmail=${data}`;
      console.log(`Sending request to: ${apiUrl}`);
      console.log(authToken);

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${formattedToken}`,
        },
        body: JSON.stringify({ "newEmail": data }),
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
