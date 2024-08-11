import React, { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
let styles = require("./telegram.module.css");

interface ImageData {
  download_url: string;
  width: number;
  height: number;
  isSelected: boolean;
  caption: string;
  className: string;
}

interface PostProps {
  text: string;
  images: ImageData[]; // Масив об'єктів типу ImageData
}

const Post: React.FC<PostProps> = ({ text, images }) => {
  const [listOfImages, setListOfImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  console.log("text", text);
  if (error) {
    return <div>Error: {error}</div>;
  }

  const photo = images.map((imageData, index) => {
    return {
      src: imageData,
      className: styles.galleryImage,
    };
  });

  return (
    <div className={styles.postContainer}>
      <div className={styles.galleryContainer}>
        <Gallery images={photo} enableImageSelection={false} />
      </div>
      <p className={styles.postText}>{text}</p>
    </div>
  );
};

export default Post;
