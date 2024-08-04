import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let styles = require("./detailed.module.css");

const Gallery1 = () => {
  let sliderRef = useRef(null);

  const images1 = [
    { original: require("./sh01.jpg").default },
    { original: require("./sh02.jpg").default },
    { original: require("./sh03.jpg").default },
    { original: require("./sh04.jpg").default },
    { original: require("./sh05.jpg").default },
    { original: require("./sh06.jpg").default },
    { original: require("./sh07.jpg").default },
    { original: require("./sh08.jpg").default },
    { original: require("./sh09.jpg").default },
    { original: require("./sh10.jpg").default },
  ];

  const images2 = [
    { original: require("./gal11.jpg").default },
    { original: require("./gal12.jpg").default },
    { original: require("./gal13.jpg").default },
    { original: require("./gal14.jpg").default },
    { original: require("./gal15.jpg").default },
    { original: require("./gal16.jpg").default },
    { original: require("./gal17.jpg").default },
  ];

  const images3 = [
    { original: require("./img11.png").default },
    { original: require("./img12.png").default },
    { original: require("./img13.png").default },
    { original: require("./img14.png").default },
    { original: require("./img15.png").default },
    { original: require("./img16.png").default },
  ];

  const GalleryRow = ({
    photos,
    settings,
    rtl = false,
  }: {
    photos: { original: string }[];
    settings: any;
    rtl?: boolean;
  }) => {
    return (
      <div>
        <Slider ref={sliderRef} {...settings} rtl={rtl}>
          {photos.map((item, index) => (
            <div key={index}>
              <img className={styles.galleryImage} src={item.original} alt={`img-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className={styles.galleryContainer}>
      <GalleryRow photos={images1} settings={settings} />
      <GalleryRow photos={images2} settings={settings} rtl={true} />
      <GalleryRow photos={images3} settings={settings} />
    </div>
  );
};

export default Gallery1;
