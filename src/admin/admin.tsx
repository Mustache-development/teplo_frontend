// src/admin/components/Admin.tsx
import React from "react";
import {useState, useEffect} from "react";
import { Link } from "gatsby";
import LoginPage from './components/Login/Login'
import AdminPage from './components/AdminPage/AdminPage'

const Admin: React.FC = () => {

  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect( () => {
    const token: string | null = localStorage.getItem('authToken');
    setIsLogged(!!token);
  }, [])
    

  return (
    <>
      {isLogged ? (
          <AdminPage />
        )  : (
          <LoginPage />
        )
      }
     </> 
  );
};

export default Admin;
