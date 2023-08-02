'use client';
import Logo from "./Logo";
import NavModal from "./NavModal";
import styles from "./Navbar.module.css";
import { useState, useEffect } from 'react';
import { CgMenu, CgMenuMotion } from 'react-icons/cg';

const Navbar = () => {
  const [navbar, setNavbar] = useState('transparent');
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoaded(true)
    changeBackground();
    window.addEventListener('resize', () => setModalOpen(false))
  }, [])

  const changeBackground = () => {
    if (
      window.scrollY >= window.innerHeight
    ) {
      setNavbar('blur')
    }
    else setNavbar('transparent');
  }

  const scrollToSection = (hash: string) => {
    const page = document.getElementById(hash + "page");
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
    }
  }

  const clickModuleOption = (input: string) => {
    setModalOpen(false);
    scrollToSection(input);
  }

  if(loaded){
    window?.addEventListener('scroll', changeBackground);
  }

  return (

    <>
      <nav className={styles[navbar]}>
        <div>
          <Logo onClick={() => setModalOpen(false)}/>
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
            {modalOpen ? 
              <CgMenuMotion
                className={styles.iconOpen} 
                onClick={() => setModalOpen(!modalOpen)}
              /> 
              : 
              <CgMenu
                className={styles.icon} 
                onClick={() => setModalOpen(!modalOpen)}
            />
            }
          </li>
        </ul>
      </nav>
      {modalOpen && 
      <NavModal 
        onClick={clickModuleOption}
        background={navbar}
        secondaryOnClick={() => setModalOpen(false)}
      />
      }
    </>
  )
}

export default Navbar;