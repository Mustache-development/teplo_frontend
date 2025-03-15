import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Post from "../components/Telegram/Post";

interface PostData {
  id: string;
  title: string;
  text: string;
  photo: string[];
}

interface PostsUIProps {
  posts: PostData[];
}

const PostsUI: React.FC<PostsUIProps> = ({ posts }) => {
  const formatImages = (urls: string[]): ImageData[] => {
    return urls.map((url, index) => ({
      src: url,
      width: 800,
      height: 600,
    }));
  };
  return (
    <>
      <div style={{ height: "500px", overflowY: "scroll" }}>
        <h2>Список постів</h2>
        <ul>
          {posts?.map((post) => {
            let imgUrl = post.photo[0]?.replace("localhost:3000", "localhost:5000");
            return (
              <li key={post.id}>
                <Post text={post.text} images={post.photo} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PostsUI;
