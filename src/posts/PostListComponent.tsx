import React, { useEffect, useState } from 'react';
import { getPosts } from './postService';
import { StaticImage } from "gatsby-plugin-image"
import { Image } from "gatsby-image"
import PostsUI from './PostsUI'

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

  console.log(posts)

  return (
    <PostsUI posts={posts}/>
  );
};

export default PostListComponent;
