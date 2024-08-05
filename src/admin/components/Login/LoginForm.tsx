import * as React from "react";
import LoginUI from "./LoginUI";
import { saveAuthToken } from "./authUtils";

export default function SignIn({ onLoginSucces }) {
  const [isLoading, setIsLoading] = React.useState(false);

  interface SnackbarData {
    open: boolean;
    text: string;
    isSuccess: boolean;
  }

  const [snackbarData, setSnackbarData] = React.useState<SnackbarData>({
    open: false,
    text: "",
    isSuccess: true,
  });

  const handleNetworkRequest = (text: string, isSuccess: boolean) => {
    setSnackbarData({
      open: true,
      text: text,
      isSuccess: isSuccess,
    });
    console.log("handleNetworkRequest");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    setIsLoading(true);

    try {
      const requestBody = {
        email,
        password,
      };
      console.log(requestBody);

      // const baseUrl = process.env.BACKEND_URL;
      const baseUrl = process.env.BASE_URL;
      console.log(baseUrl);
      const apiUrl = `${baseUrl}/auth/login`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log(responseData.token);
        const token = responseData.token;
        if (responseData.token) {
          console.log("Успішна авторизація:");
          handleNetworkRequest("Авторизація успішна", true);
          saveAuthToken(token);
          setIsLoading(false);
          window.location.replace("/admin");
        } else {
          handleNetworkRequest("Авторизація не відбулась", false);
          setIsLoading(false);
          console.log(response);
        }
      } else {
        console.error("Помилка на бекенді:", await response.json());
      }
    } catch (error) {
      console.error("Мережева помилка:", error);
      handleNetworkRequest("Запит не успішний", false);

      setIsLoading(false);
    }

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <LoginUI
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      snackbarData={snackbarData}
      setSnackbarData={setSnackbarData}
    />
  );
}
