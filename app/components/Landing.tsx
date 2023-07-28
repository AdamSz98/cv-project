'use client';

import styles from './Landing.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Landing = () => {
  const initialNum = Math.floor(Math.random() * 6 + 1);
  const [cityNum, setCityNum] = useState(initialNum);
  const [loaded, setLoaded] = useState(false);

  const changeCity = () => {
    if(window.scrollY < window.innerHeight) return;
    let newNum = Math.floor(Math.random() * 6 + 1);
    if(newNum === cityNum) newNum = Math.floor(Math.random() * 6 + 1);
    setCityNum(newNum);
  }

  useEffect(() => {
    setLoaded(true);
  }, [])

  if(loaded) window.addEventListener('scroll', changeCity);

  return (
    <div className={styles.landing}>
        <Image
          className={styles.backgroundImg} 
          src={`/images/bg${cityNum}.jpg`} 
          alt="city" 
          width={670} 
          height={447} 
        />
      <div className={styles.textContainer}>
        <h1 className={styles.text}>
          Adam, <br/> a passionate junior dev for your consideration.
        </h1>
      </div>
    </div>
  )
}

export default Landing;