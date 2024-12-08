import React, { useEffect, useState, useRef } from "react";
import Post from "./Post";
let styles = require("./telegram.module.css");
import { getPosts } from "./postService";
import CircularProgress from "@mui/material/CircularProgress";

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
  const [loading, setLoading] = useState(false);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const postCount = 5;
  useEffect(() => {
    fetchPosts().then(() => {
      setTimeout(() => {
        if (mainContentRef.current) {
          const container = mainContentRef.current;
          container.scrollTop = container.scrollHeight;
        }
      }, 0);
    });
  }, []);

  const fetchPosts = async () => {
    if (loading || allPostsLoaded) return;

    setLoading(true);
    try {
      const container = mainContentRef.current;
      const previousScrollHeight = container?.scrollHeight || 0;
      const previousScrollTop = container?.scrollTop || 0;

      const response = await getPosts(postCount, offsetRef.current);

      if (response.posts.length === 0) {
        setAllPostsLoaded(true);
      } else {
        setPosts((prevPosts) => [...response.posts, ...prevPosts]);

        setTimeout(() => {
          if (container) {
            const newScrollHeight = container.scrollHeight;
            container.scrollTop = previousScrollTop + (newScrollHeight - previousScrollHeight);
          }
        }, 0);
      }

      offsetRef.current += postCount;
    } catch (error) {
      console.error("Помилка при отриманні постів:", error);
    } finally {
      setLoading(false);
    }
  };



  const handleScroll = () => {
    if (!mainContentRef.current || loading || allPostsLoaded) return;

    const container = mainContentRef.current;

    if (container.scrollTop <= 0) {
      const previousScrollHeight = container.scrollHeight;

      fetchPosts().then(() => {
        if (mainContentRef.current) {
          mainContentRef.current.scrollTop = container.scrollHeight - previousScrollHeight;
        }
      });
    }
  };

  return (
    <div className={styles.container} id="telegram">
      <div className="title darkColor">Наш телеграм</div>

      <div className={styles.text}>
        Будь в курсі наших останніх новин - підписуйся на телеграм канал!
      </div>
      <div className={styles.main}>
        <div className={styles.mainTitle}>
          <a
            href="https://t.me/teplonaperedovu"
            target="_blank"
            rel="noopener noreferrer"
          >
            -= ТЕПЛО НА ПЕРЕДОВУ =-
          </a>
        </div>
        <div
          className={styles.mainContent}
          ref={mainContentRef}
          onScroll={handleScroll}
        >
          {loading && (
            <div className={styles.loading}>
              <CircularProgress />
            </div>
          )}
          {posts
            .filter((post) => post.photo.length > 0 || post.text.trim() !== "")
            .map((post, index) => (
              <Post key={`${post._id}-${index}`} images={post.photo} text={post.text} />
            ))}

        </div>
        <a
          href="https://t.me/teplonaperedovu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.cta}>Підписатись</div>
        </a>
      </div>
    </div>
  );
};

export default Telegram;
