// src/admin/components/Login.tsx
import React from "react";
import LoginForm from './LoginForm';

interface LoginProps {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: LoginHandler;
  onLoginSucces: () => void;
}

// Декларуйте тип функції handleSubmit
type LoginHandler = (event: React.FormEvent<HTMLFormElement>) => void;

const Login: React.FC<LoginProps> = ({ username, password, onUsernameChange, onPasswordChange, onSubmit, onLoginSucces }) => {
  const [error, setError] = React.useState("");

  // Function for request backend
  const handleLogin: LoginHandler = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('teplo-back.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        onLoginSucces()
        console.log(isAuth)
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Помилка авторизації');
      }
    } catch (error) {
      
      setError('Виникла помилка під час авторизації');
    }
  };

  return (
    <div>
      <LoginForm onLoginSucces={onLoginSucces}/>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
