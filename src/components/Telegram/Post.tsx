import React from "react";
import { Gallery } from "react-grid-gallery";
let styles = require("./telegram.module.css");

interface ImageData {
  src: string;
  width?: number;
  height?: number;
  isSelected?: boolean;
  caption?: string;
  className?: string;
}

interface PostProps {
  text: string;
  images: string[];
}

const Post: React.FC<PostProps> = ({ text, images }) => {
  const [error, setError] = React.useState<string | null>(null);

  console.log("text", text);
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Формуємо масив для Gallery
  const galleryImages = images.map((src, index) => ({
    src,
    width: 800, // Можна вказати реальні ширину та висоту, або отримати з API
    height: 600,
    isSelected: false, // за замовчуванням
    caption: `Image ${index + 1}`, // або використовувати src
    className: styles.galleryImage,
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
