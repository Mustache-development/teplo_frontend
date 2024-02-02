import React, { useEffect, useState } from 'react';
import { getPosts } from './postService';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostListComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  console.log('PostList work')

  useEffect(() => {
    // Викликаємо функцію для отримання постів при завантаженні компоненту
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts(); // Викликаємо функцію отримання постів
      console.log(responce)
      setPosts(response.posts); // Встановлюємо отримані пости в стан
    } catch (error) {
      console.error('Помилка при отриманні постів:', error);
    }
  };

  return (
    <div>
      <h2>Список постів</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListComponent;
