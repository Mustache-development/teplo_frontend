import React from "react";
let styles = require("./donators.module.css");
import CardDonator from "./CardDonator";
import Button from "../ButtonComponent/ButtonComponent";

const donatorImage = [
  { original: require("./img1.png").default },
  { original: require("./img3.png").default },
  { original: require("./img4.png").default },
];

interface Donator {
  id: string;
  text: string;
}

const DonatorsData: Donator[] = [
  { id: "0", text: "Світлана  К. /n країнсько-німецька гімназія №53" },
  { id: "2", text: '"Альона та Світлана "топ косметікс Юкрейн"' },
  { id: "3", text: "Євген П. /n Топ донатер" },
];
const Donators = () => {
  return (
    <div className={styles.donators} id="donators">
      <div className={styles.title}>Топ донатери та бізнес, що допомагає</div>
      <div className={styles.cardsContainer}>
        {DonatorsData.map((item, index) => (
          <CardDonator key={item.id} text={item.text} img={donatorImage[index].original} />
        ))}
      </div>
      <div className={styles.ctaText}>Впишіть своє ім'я в історію нашої перемоги!</div>
      <Button to="https://t.me/teplonaperedovu" variant="filled" theme="dark">
        Стати партнером
      </Button>
    </div>
  );
};

export default Donators;
