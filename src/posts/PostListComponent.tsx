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

  useEffect(() => {
    // Викликаємо функцію для отримання постів при завантаженні компоненту
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts(); // Викликаємо функцію отримання постів
      setPosts(response.posts); // Встановлюємо отримані пости в стан
    } catch (error) {
    }
  };

  return (
    <PostsUI posts={posts}/>
  );
};

export default PostListComponent;
