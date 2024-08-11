import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Post from "../components/Telegram/Post";

interface Post {
  id: string;
  title: string;
  text: string;
  photo: string[];
}

interface PostsUIProps {
  posts: Post[];
}

const PostsUI: React.FC<PostsUIProps> = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div style={{ height: "500px", overflowY: "scroll" }}>
        <h2>Список постів</h2>
        <ul>
          {posts?.map((post) => {
            console.log(post);
            let imgUrl = post.photo[0]?.replace("localhost:3000", "localhost:5000");
            console.log(imgUrl);
            console.log(post.photo[0]);
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
