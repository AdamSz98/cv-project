'use client';
import styles from "./Navbar.module.css";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [loaded])

  const changeBackground = () => {
    if(window.scrollY >= window.innerHeight) setNavbar('blur')
    else setNavbar('navbar');
  }

  const navigateTo = (y: number) => {
    window.scrollTo({
      top: y,
      left: 0,
      behavior: "smooth",
    });
  }

  if(loaded){
    window?.addEventListener('scroll', changeBackground);
  }

  return (
    <div className={styles[navbar]}>
      <div>
        <a
          href="#home"
          className={styles.logo}
          onClick={() => navigateTo(0)}
        >
          Adam Sz
        </a>
      </div>
      <div className={styles.linkContainer}>
        <a 
          href="#about" 
          className={styles.link}
          onClick={() => navigateTo(window.innerHeight)}
        >ABOUT</a>
        <a 
          href="#skills" 
          className={styles.link}
          onClick={() => navigateTo(window.innerHeight * 2)}
        >SKILLS</a>
        <a href="#contacts" className={styles.link}>CONTACTS</a>
      </div>
    </div>
  )
}

export default Navbar;