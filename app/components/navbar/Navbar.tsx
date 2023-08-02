'use client';
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
    changeBackground();
  }, [])

  const changeBackground = () => {
    if (
      window.scrollY >= window.innerHeight
    ) {
      setNavbar('blur')
    }
    else setNavbar('navbar');
  }

  const scrollToSection = (hash: string) => {
    const page = document.getElementById(hash + "page");
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
    }
  }

  if(loaded){
    window?.addEventListener('scroll', changeBackground);
  }

  return (
    <nav className={styles[navbar]}>
      <div>
        <Logo />
      </div>
      <ul className={styles.linkContainer}>
        <li>
          <a 
            href="#about" 
            className={styles.link}
            onClick={() => scrollToSection("about")}
          >ABOUT</a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={styles.link}
            onClick={() => scrollToSection("skills")}
          >SKILLS</a>
        </li>
        <li>
          <a 
            href="#contacts" 
            className={styles.link}
            onClick={() => scrollToSection("contacts")}
          >CONTACTS</a>
        </li>
        <li>
          <a
            className={styles.smallLink} 
          >
            <RxHamburgerMenu />
          </a>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;