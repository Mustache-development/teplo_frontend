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

const Post: React.FC<{ text: string }> = ({ text }) => {
  const [listOfImages, setListOfImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const images = listOfImages.map((imageData, index) => {
    return {
      src: imageData.download_url,
      width: imageData.width,
      height: imageData.height,
      isSelected: false,
      caption: `Image ${index}`,
      className: styles.galleryImage,
    };
  });

  return (
    <div className={styles.postContainer}>
      <div className={styles.galleryContainer}>
        <Gallery images={images} enableImageSelection={false} />
      </div>
      <p className={styles.postText}>{text}</p>
    </div>
  );
};

export default Post;
