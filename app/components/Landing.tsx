'use client';

import styles from './Landing.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Landing = () => {
  const cityNum = Math.floor(Math.random() * 6 + 1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  if (!loaded) return;
  return (
    <section className={styles.landing}>
        <Image
          className={styles.backgroundImg} 
          src={`/images/bg${cityNum}.jpg`} 
          alt="city" 
          width={670} 
          height={447} 
        />
      <div className={styles.textContainer}>
        <h1 className={styles.text}>
          Adam,
        </h1>
        <h1 className={styles.catchPhrase}>
          a passionate dev for <br/> your consideration.
        </h1>
      </div>
    </section>
  )
}

export default Landing;