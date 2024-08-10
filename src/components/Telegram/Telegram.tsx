import React, { useEffect } from "react";
import Post from "./Post";
let styles = require("./telegram.module.css");
import { getPosts } from "./postService";

const Telegram: React.FC = () => {
  const [posts, setPosts] = React.useState([
    { id: 0, text: "text1" },
    { id: 1, text: "text2" },
    { id: 2, text: "text3" },
  ]);

  useEffect(() => {
    // Викликаємо функцію для отримання постів при завантаженні компоненту
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts(); // Викликаємо функцію отримання постів
      console.log(response);
      setPosts(response.posts); // Встановлюємо отримані пости в стан
      console.log(posts);
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
          {/* <Post text="post text" />
          <Post text="post text" /> */}
          {posts.map((post) => (
            <Post key={post.text} text={post.text} />
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
