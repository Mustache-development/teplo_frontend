export const getPosts = async (limit: number, offset: number) => {
  console.log("getPost work");
  const baseUrl = `https://${process.env.REACT_APP_BASE_URL}/api`;
  try {
    const apiUrl = `${baseUrl}/posts?limit=${limit}&offset=${offset}`;
    console.log("getPost apiUrl", apiUrl);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Пости:", result);
      return result;
    } else {
      console.error("Помилка при отриманні постів:", await response.json());
    }
  } catch (error) {
    console.error("Мережева помилка:", error);
  }
};
