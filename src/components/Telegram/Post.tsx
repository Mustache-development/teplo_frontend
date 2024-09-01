import React from "react";
let styles = require("./telegram.module.css");

interface ImageData {
  base64Image: string;
  width: number;
  height: number;
  caption?: string;
}

interface PostProps {
  text: string;
  images: ImageData[];
}

const Post: React.FC<PostProps> = ({ text, images }) => {
  console.log("Post text, images", text, images);
  return (
    <div className={styles.postContainer}>
      <div className={styles.galleryContainer}>
        <div className={styles.grid}>
          {images.map((imageData, index) => (
            <div key={index} className={styles.gridItem}>
              <img
                src={`data:image/jpeg;base64,${imageData.base64Image}`}
                alt={`Image ${index + 1}`}
                className={styles.image}
              />
              {imageData.caption && <p className={styles.caption}>{imageData.caption}</p>}
            </div>
          ))}
        </div>
      </div>
      <p className={styles.postText}>{text}</p>
    </div>
  );
};

export default Post;
