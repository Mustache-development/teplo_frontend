import React, { useEffect } from "react";
import Post from "./Post";
let styles = require("./telegram.module.css");
import { getPosts } from "./postService";

const Telegram: React.FC = () => {
  const [posts, setPosts] = React.useState([
    { _id: "0", text: "text1" },
    { _id: "1", text: "text2" },
    { _id: "2", text: "text3" },
  ]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      console.log(response);
      setPosts(response.posts);
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
          {posts.map((post) => {
            console.log("post", post);
            return <Post key={post._id} text={post.text} />;
          })}
        </div>
        <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
          <div className={styles.cta}>Підписатись</div>
        </a>
      </div>
    </div>
  );
};

export default Telegram;
