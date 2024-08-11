import React, { useEffect, useState } from "react";
import Post from "./Post";
let styles = require("./telegram.module.css");
import { getPosts } from "./postService";

const Telegram: React.FC = () => {
  const [posts, setPosts] = useState<{ _id: string; text: string; photo: string[] }[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      console.log("Fetched posts:", response);
      setPosts(response.posts);
    } catch (error) {
      console.error("Помилка при отриманні постів:", error);
    }
  };

  return (
    <div className={styles.container} id="telegram">
      <div className="title darkColor">Наш телеграм</div>

      <div className={styles.text}>Будь в курсі наших останніх новин - підписуйся на телеграм канал!</div>
      <div className={styles.main}>
        <div className={styles.mainTitle}>
          <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
            -= ТЕПЛО НА ПЕРЕДОВУ =-
          </a>
        </div>

        <div className={styles.mainContent}>
          {posts.map((post) => (
            <Post key={post._id} images={post.photo} text={post.text} />
          ))}
        </div>
        <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
          <div className={styles.cta}>Підписатись</div>
        </a>
      </div>
    </div>
  );
};

export default Telegram;
