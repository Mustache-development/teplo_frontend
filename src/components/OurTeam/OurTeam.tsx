import React, { useState, useRef } from "react";
import TeamCard from "./TeamCard";
import Button from "../ButtonComponent/ButtonComponent";
let team = require("./team.json");
let styles = require("./ourTeam.module.css");
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderTeam.css";
import ButtonLeftRight from "../ButtonComponent/ButtonsLeftRight";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";


const OurTeam: React.FC = () => {
  let sliderRef = useRef<Slider | null>(null);

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "ourTeam" } },
        sort: { fields: name, order: ASC }
        ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 342, height: 258)
            }
          }
        }
      }
    }
  `);

  interface Edge {
    node: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  }

  const images: IGatsbyImageData[] = data.allFile.edges.map((edge: Edge) => edge.node.childImageSharp.gatsbyImageData)
  console.log('Team images: ', images);

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
    <div className={styles.container} id="team">
      <div className="title darkColor">Наша команда</div>
      <div className={styles.mainText} lang="uk">
        Наша команда - це люди, які прагнуть зробити свій внесок і не залишатися осторонь. Вони транспортують,
        виготовляють, шиють, готують, вкладають власні кошти та роблять усе, щоб наблизити нашу перемогу. Ви можете
        приєднатися до нас, поділившись інформацією, присвятивши свій час або зробивши (фінансовий) внесок.
      </div>

      <Slider ref={sliderRef} {...settings}>
        {team.map((item: { name: string; button: string; text: string }, index: number) => (
          <div className={styles.slideContainer} key={index}>
            <TeamCard
              name={item.name}
              button={item.button}
              text={item.text}
              img={images[index] || null}
            />
          </div>
        ))}
      </Slider>
      <div className={styles.controlContainer}>
        <ButtonLeftRight direction={"left"} onClick={previous} />
        <ButtonLeftRight direction={"right"} onClick={next} />{" "}
      </div>
      <div className={styles.CTA}>Приєднуйтесь до нашого волонтерського руху!</div>
      <div className={styles.buttonContainer}>
        <Button to="https://t.me/teplonaperedovu" variant="filled" theme="light">
          Стати волонтером
        </Button>
      </div>
    </div>
  );
};

export default OurTeam;
