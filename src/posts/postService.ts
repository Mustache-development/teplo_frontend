export const getPosts = async () => {
  const baseUrl = process.env.BACKEND_URL;
  try {
    const apiUrl = `http://localhost:3000/api/posts`;

    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        return result
      } else {
      }
    } else {
    }
  } catch (error) {
  }
};

getPosts();