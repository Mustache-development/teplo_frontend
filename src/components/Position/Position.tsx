import React, { useState, useRef } from "react";
import PositionCard from "./PositionCard";
import positions from "./positionInfo.json";
let styles = require("./position.module.css");
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import CTA from "./CTA";
import ButtonLeftRight from "../ButtonComponent/ButtonsLeftRight";

const Position: React.FC = () => {
  let sliderRef = useRef<Slider | null>(null);

  const images = [
    { original: require("./noshi.png").default },
    { original: require("./covers.png").default },
    { original: require("./coats.png").default },
    { original: require("./spalniki.png").default },
    { original: require("./gas.png").default },
    { original: require("./lopati.png").default },
    { original: require("./svichki.png").default },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    centerPadding: "32px",
    centerMode: true,
    className: "center",
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <>
      <div className={styles.container} id="position">
        <div className={`title darkColor ${styles.title}`}>Позиції допомоги</div>

        <Slider ref={sliderRef} {...settings}>
          {positions.map((item: { name: string; button: string; text: string }, index: number) => (
            <div className={styles.slideContainer} key={index}>
              <PositionCard
                name={item.name}
                button={item.button}
                text={item.text}
                img={images[index % images.length].original}
              />
            </div>
          ))}
        </Slider>
        <div className={styles.controlContainer}>
          <ButtonLeftRight direction={"left"} onClick={previous} />
          <ButtonLeftRight direction={"right"} onClick={next} />
        </div>
      </div>
      <CTA />
    </>
  );
};

export default Position;
