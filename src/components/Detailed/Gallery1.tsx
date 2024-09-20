import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let styles = require("./detailed.module.css");

const Gallery1 = () => {
  let sliderRef = useRef(null);

  const data = useStaticQuery(graphql`
    query {
      gallery1: allFile(filter: { relativeDirectory: { eq: "detailed/row2" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 300, quality: 90)
            }
          }
        }
      }
      gallery2: allFile(filter: { relativeDirectory: { eq: "detailed/row3" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 300, quality: 90)
            }
          }
        }
      }
      gallery3: allFile(filter: { relativeDirectory: { eq: "detailed/row1" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 300, quality: 90)
            }
          }
        }
      }
    }
  `);

  const images1 = data.gallery1.edges.map((edge: any) => ({
    original: getSrc(edge.node.childImageSharp.gatsbyImageData),
  }));

  const images2 = data.gallery2.edges.map((edge: any) => ({
    original: getSrc(edge.node.childImageSharp.gatsbyImageData),
  }));

  const images3 = data.gallery3.edges.map((edge: any) => ({
    original: getSrc(edge.node.childImageSharp.gatsbyImageData),
  }));

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
