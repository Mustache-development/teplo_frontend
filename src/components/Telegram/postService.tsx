export const getPosts = async (limit: number, offset: number) => {
  const baseUrl = `https://${process.env.REACT_APP_BASE_URL}/api`;
  
  try {
    console.log(process.env.REACT_APP_BASE_URL)
    const apiUrl = `${baseUrl}/posts?limit=${limit}&offset=${offset}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
    }
  } catch (error) {
  }
};
