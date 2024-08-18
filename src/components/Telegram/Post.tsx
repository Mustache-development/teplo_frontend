import React from "react";
import Gallery from "react-photo-gallery";
import { Image as GalleryImage } from "react-grid-gallery";
let styles = require("./telegram.module.css");

interface ImageData {
  base64Image?: string;
  width: number;
  height: number;
  isSelected?: boolean;
  caption?: string;
  className?: string;
}

interface PostProps {
  text: string;
  images: ImageData[];
}

const Post: React.FC<PostProps> = ({ text, images }) => {
  const [error, setError] = React.useState<string | null>(null);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const galleryImages = images.map((imageData, index) => ({
    src: `data:image/jpeg;base64,${imageData.base64Image}`,
    width: imageData.width || 800,
    height: imageData.height || 600,
    isSelected: imageData.isSelected || false,
    caption: imageData.caption || `Image ${index + 1}`,
    className: styles.galleryImage,
  }));

  return (
    <div className={styles.postContainer}>
      <div className={styles.galleryContainer}>
        <Gallery photos={galleryImages} />
      </div>
      <p className={styles.postText}>{text}</p>
    </div>
  );
};

export default Post;
