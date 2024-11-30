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
  let offset = 0;
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const mainContantRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchAllPosts(); // Початковий запит
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

  const fetchPosts = async (currentOffset: number) => {
    console.log('fetch posts start');
    try {
      const response = await getPosts(1, currentOffset);
      console.log("Fetched post:", response);
      if (response.posts.length === 0) {
        setAllPostsLoaded(true);
        return false;
      }
      setPosts((prevPosts) => [...prevPosts, ...response.posts]);
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Помилка при отриманні посту:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllPosts = async () => {
    setLoading(true);
    let hasMorePosts: boolean | undefined = true;
    while (hasMorePosts && !allPostsLoaded) {
      hasMorePosts = await fetchPosts(offset);
      if (hasMorePosts) {
        offset = offset + 1;
      }
    }
    setLoading(false);
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
          <div className={styles.loading}>
            Завантаження постів...
          </div>
        ) : (
          <div className={styles.mainContent} ref={mainContantRef}>
            {posts
              .filter((post) => post.photo.length > 0 || post.text.trim() !== "")
              .map((post, index) => (
                <Post key={`${post._id}-${index}`} images={post.photo} text={post.text} />
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
