import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface PostsUIProps {
  posts: object;
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
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <p>
                  {/* { post.photo[0] ? (<StaticImage src="https://teplo-back.onrender.com/upload/AQADedQxG8rriUt9.jpg" alt="My Image" />) : ('')} */}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PostsUI;
