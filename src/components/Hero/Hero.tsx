import React from "react";
let styles = require("./hero.module.css");
import Button from "../ButtonComponent/ButtonComponent";

interface HeroProps { }

interface HeroProps {
}

const Hero: React.FC<HeroProps> = ({ }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>ТЕПЛО НА ПЕРЕДОВУ</div>
      <div className={styles.title}>Станьте частиною перемоги!</div>
      <div className={styles.description}>
        Наша діяльність спрямована на допомогу захисникам і захисницям України на передовій. Ми допомагаємо як окремим
        військовим, так і підрозділам.
      </div>
      <div className={styles.buttoncontainer}>
        <Button to="https://send.monobank.ua/jar/pAH2wwD8n" variant="filled" theme="light" width={"191px"}>
          Підтримати
        </Button>
        <Button to="https://t.me/teplonaperedovu" variant="outlined" theme="light" width={"191px"}>
          Потрібна допомога
        </Button>
      </div>
    </section>
  );
};

export default Hero;
