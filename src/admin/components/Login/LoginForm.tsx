import * as React from 'react';
import LoginUI from './LoginUI';
import { saveAuthToken } from './authUtils';

export default function SignIn({onLoginSucces}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    try {
      const requestBody = {
        email,
        password,
      };
      console.log(requestBody)

      const apiUrl = 'https://teplo-back.onrender.com/api/auth/login';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log(response)
        if (token) {
          console.log('Успішна авторизація:');
          onLoginSucces();
        }
        // onSubmit({ email, password });
        console.log(token)
        saveAuthToken(token)
      } else {
        console.error('Помилка на бекенді:', await response.json());
      }
    } catch (error) {
      console.error('Мережева помилка:', error);
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <LoginUI 
      handleSubmit = {handleSubmit}
    />
  );
}