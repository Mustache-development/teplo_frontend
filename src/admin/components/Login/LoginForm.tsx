import * as React from "react";
import LoginUI from "./LoginUI";
import { saveAuthToken } from "./authUtils";

export default function SignIn({ }) {
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

      const baseUrl = `https://${process.env.REACT_APP_BASE_URL}/api`;
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
        const token = responseData.token;
        if (responseData.token) {
          handleNetworkRequest("Авторизація успішна", true);
          saveAuthToken(token);
          setIsLoading(false);
          window.location.replace("/admin");
        } else {
          handleNetworkRequest("Авторизація не відбулась", false);
          setIsLoading(false);
        }
      } else {
      }
    } catch (error) {
      handleNetworkRequest("Запит не успішний", false);

      setIsLoading(false);
    }
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
