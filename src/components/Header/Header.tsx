import React from 'react';
import HeadLine from './HeadLine';
import Hero from './../Hero/Hero';
let styles = require('./header.module.css')

const Header: React.FC = ({}) => {
  return (
    <div className={styles.main}>
      <HeadLine />
      <Hero />
    </div>
  );
}

export default Header;