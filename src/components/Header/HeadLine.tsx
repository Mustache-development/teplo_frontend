import React from 'react';
let styles = require('./headline.module.css');
import  logo from './logo.png'
import burger from './burger.png'
import telegram from './telegram.png'



interface HeaderProps {
}

const HeadLine: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <div><img src={logo} className={styles.logo}/></div>
      <div className={styles.buttoncontainer}>
        <button className={styles.button}>
          Підтримати
        </button>
      </div>
      <div className={styles.menucontainer}>
        <img src={telegram} className={styles.telegram}/>
        <div className={styles.burgercontainer}>
          <img src={burger} className={styles.burger}/>
        </div>
      </div>

    </div>
  );
}

export default HeadLine;