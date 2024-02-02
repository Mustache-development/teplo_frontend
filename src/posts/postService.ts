// Функція для отримання постів
export const getPosts = async () => {
    console.log('getPost work')
    try {
      const apiUrl = 'https://teplo-back.onrender.com/api/posts';
      
      // Отримання токену з локального сховища
      const authToken = localStorage.getItem('authToken');
  
      // Перевірка наявності токену перед виконанням запиту
      if (authToken) {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,  // Додайте токен до заголовків
          },
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Пости:', result.posts);
        } else {
          console.error('Помилка при отриманні постів:', await response.json());
        }
      } else {
        console.error('Токен не знайдено. Користувач не авторизований.');
      }
    } catch (error) {
      console.error('Мережева помилка:', error);
    }
  };
  
  // Виклик функції для отримання постів
  getPosts();