import React from "react";
let styles = require("./detailed.module.css");
import ImageGallery from "react-image-gallery";
import Gallery1 from "./Gallery1";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "../ButtonComponent/ButtonComponent";

let rightArrow = require("./buttonLeft.png");

const images = [
  {
    original: require("./img01.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img02.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img03.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img04.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img05.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img06.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img07.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img08.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img09.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img10.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img11.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img12.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img13.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img14.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img15.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img16.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img17.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
  {
    original: require("./img18.png").default,
    originalHeight: 258,
    originalWidth: 342,
  },
];

interface DetailedProps {}

const Detailed: React.FC<DetailedProps> = ({}) => {
  const renderRightNav = (onClick: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean) => {
    return (
      <button className={`${styles.navButton} ${styles.rightNav}`} onClick={onClick} disabled={disabled}>
        <img src={rightArrow} alt="Right" />
      </button>
    );
  };

  return (
    <>
      <section className={styles.container} id="detailed">
        <div className="title darkColor" id="about">
          <p>Детальніше про</p>
          <p>"Тепло на передову"</p>
        </div>
        <div className={`${styles.description} ${styles.firstDescription}`}>
          <p lang="uk">
            "Тепло на передову" заснований Артемом Рубаном у перші тижні повномасштабного вторгнення з метою надання
            підтримки захисникам у складний період. Почавши з постачання буржуйок на фронт, проєкт швидко розширився,
            охопивши широкий спектр необхідного обладнання.
          </p>
          <br />
          <p lang="uk">
            {" "}
            Сьогодні "Тепло на передову" забезпечує військових каверами, м'якими ношами, плащами-палатками, газовими
            горілками, балонами та іншим устаткуванням, що гарантує комфорт і безпеку на передовій. Шукаючи шляхи
            надання допомоги, Артем відвідував численні волонтерські центри, але через хаос і невизначеність на початку
            конфлікту вирішив самостійно організувати підтримку.
          </p>
        </div>
      </section>
      <div className={styles.photoSlider}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
          thumbnailPosition="bottom"
          additionalClass={styles.customImageGallery}
          showFullscreenButton={false}
          autoPlay={true}
          renderRightNav={renderRightNav}
        />
      </div>
      <section className={styles.container}>
        <div className={`${styles.description} ${styles.secondDescription}`}>
          <p lang="uk">
            Спочатку основним напрямком були буржуйки, які забезпечували тепло і зручність у польових умовах. З часом
            було створено різні модифікації, що враховували специфіку експлуатації та побажання бійців. Однак з появою
            дронів їх використання стало небезпечним, і фокус змістився на доставку інших необхідних речей, таких як
            газові пальники, балони та окопні свічки.
          </p>
          <br />
          <p lang="uk">
            З розвитком проєкту збільшувалась кількість позицій допомоги: з'явились м'які ноші, кавери для шоломів,
            плащі-палатки, лопати та спальні мішки. Завдяки зростанню чисельності команди та кількості постійних
            донаторів, "Тепло на передову" працює на постійній основі, щотижнево забезпечуючи військових актуальною та
            необхідною допомогою. "Тепло на передову" об'єднує волонтерів, готових підтримувати наших захисників,
            надаючи їм необхідне обладнання для комфорту та безпеки у найскладніших умовах.
          </p>
        </div>
      </section>
      <Gallery1 />

      <div className={styles.buttonsContainer}>
        <Button to="https://send.monobank.ua/jar/pAH2wwD8n" variant="filled" theme="light">
          Допомогти проєкту
        </Button>
        <Button to="https://t.me/teplonaperedovu" variant="outlined" theme="light">
          Підписатись на телеграм
        </Button>
      </div>
    </>
  );
};

export default Detailed;
