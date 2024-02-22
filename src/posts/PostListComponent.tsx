import React, { useEffect, useState } from 'react';
import { getPosts } from './postService';
import { StaticImage } from "gatsby-plugin-image"
import { Image } from "gatsby-image"

interface Post {
  _id: number;
  text: string;
  photo: string[];
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
      console.log(response)
      setPosts(response.posts); // Встановлюємо отримані пости в стан
      console.log(posts)
    } catch (error) {
      console.error('Помилка при отриманні постів:', error);
    }
  };

  return (
    <div>
      <h2>Список постів</h2>
      <ul>
        {posts?.map((post) => {
          let imgUrl = post.photo[0]?.replace('localhost:3000', 'localhost:5000')
          console.log(imgUrl)
          return (
            <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <p>
              { post.photo[0] ? (<img src={imgUrl} alt="My Image" />) : ('')}
            </p>
          </li>
          )
          
        })
          
        }
      </ul>
    </div>
  );
};

export default PostListComponent;
