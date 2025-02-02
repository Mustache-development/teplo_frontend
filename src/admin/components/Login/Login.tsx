// src/admin/components/Login.tsx
import React from "react";
import LoginForm from './LoginForm';

type LoginHandler = (event: React.FormEvent<HTMLFormElement>) => void;

const Login: React.FC = () => {
  const [error, setError] = React.useState("");



  return (
    <div>
      <LoginForm />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
