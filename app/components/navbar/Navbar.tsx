'use client';
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', changeBackground);
  }, [])

  useEffect(() => {
    setLoaded(true)
    changeBackground();
  }, [loaded])

  const changeBackground = () => {
    if(window.innerWidth < 600) {
      setNavbar('small');
    } else if (
      window.scrollY >= window.innerHeight && 
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
    <nav className={styles[navbar]}>
      <div>
        <Logo
          href="#home"
        />
      </div>
      <ul className={styles.linkContainer}>
        <li>
          <a 
            href="#about" 
            className={styles.link}
          >ABOUT</a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={styles.link}
          >SKILLS</a>
        </li>
        <li>
          <a 
            href="#contacts" 
            className={styles.link}
          >CONTACTS</a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-szekr%C3%A9nyes-773046216/"
            className={styles.smallLink} 
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/AdamSz98"
            className={styles.smallLink} 
          >
            <AiFillGithub />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;