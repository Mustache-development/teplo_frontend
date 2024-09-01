import React, { useEffect, useState, useRef } from "react";
import Post from "./Post";
let styles = require("./telegram.module.css");
import { getPosts } from "./postService";

interface ImageData {
  base64Image: string;
  width: number;
  height: number;
  caption?: string;
}

interface PostData {
  _id: string;
  text: string;
  photo: ImageData[];
}

const Telegram: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const mainContantRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading && mainContantRef.current) {
        const container = mainContantRef.current;
        container.scrollTop = container.scrollHeight - container.clientHeight;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [loading, posts]);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      console.log("Fetched posts:", response);
      setPosts(response.posts);
      setLoading(false);
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
        {loading ? (
          <div></div>
        ) : (
          <div className={styles.mainContent} ref={mainContantRef}>
            {posts
              .filter((post) => post.photo.length > 0 || post.text.trim() !== "")
              .map((post) => (
                <Post key={post._id} images={post.photo} text={post.text} />
              ))}
          </div>
        )}
        <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
          <div className={styles.cta}>Підписатись</div>
        </a>
      </div>
    </div>
  );
};

export default Telegram;
