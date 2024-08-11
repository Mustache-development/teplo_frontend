import React from "react";
import { Gallery } from "react-grid-gallery";
let styles = require("./telegram.module.css");

interface ImageData {
  src: string;
  isSelected?: boolean;
  caption?: string;
  className?: string;
}

interface PostProps {
  text: string;
  images: ImageData[];
}

const Post: React.FC<PostProps> = ({ text, images }) => {
  const [listOfImages, setListOfImages] = React.useState<ImageData[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  console.log("text", text);
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Перетворюємо масив ImageData в формат, що потрібен для Gallery
  const galleryImages = images.map((imageData, index) => ({
    src: imageData.src,
    width: 800, // Можна вказати значення за замовчуванням або отримати з API
    height: 600, // Можна вказати значення за замовчуванням або отримати з API
    isSelected: imageData.isSelected || false,
    caption: imageData.caption || imageData.src,
    className: imageData.className || styles.galleryImage,
  }));

  return (
    <div className={styles.postContainer}>
      <div className={styles.galleryContainer}>
        <Gallery images={galleryImages} enableImageSelection={false} />
      </div>
      <p className={styles.postText}>{text}</p>
    </div>
  );
};

export default Post;
