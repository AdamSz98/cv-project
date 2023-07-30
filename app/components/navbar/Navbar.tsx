'use client';
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
    changeBackground();
  }, [loaded])

  const changeBackground = () => {
    if(window.scrollY >= window.innerHeight && 
      window.scrollY < window.innerHeight * 3
    ) {
      setNavbar('blur')
    }
    else setNavbar('navbar');
  }

  if(loaded){
    window?.addEventListener('scroll', changeBackground);
  }

  return (
    <div className={styles[navbar]}>
      <div>
        <Logo
          href="#home"
        />
      </div>
      <div className={styles.linkContainer}>
        <a 
          href="#about" 
          className={styles.link}
        >ABOUT</a>
        <a 
          href="#skills" 
          className={styles.link}
        >SKILLS</a>
        <a 
          href="#contacts" 
          className={styles.link}
        >CONTACTS</a>
      </div>
    </div>
  )
}

export default Navbar;