import React from 'react';
let styles = require('./hero.module.css')

interface HeroProps {
}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        ТЕПЛО НА ПЕРЕДОВУ
      </div>
      <div className={styles.title}>
        Станьте частиною перемоги!
      </div>
      <div className={styles.description}>
        Наша діяльність   спрямована на допомогу захисникам і захисницям України на передовій.
        Ми допомагаємо як окремим військовим, так і підрозділам.
      </div>
    </section>
  );
}

export default Hero;