'use client'
import styles from './Logo.module.css';
import { useState, useEffect } from 'react';

interface LogoProps {
  onClick: any;
}

const Logo: React.FC<LogoProps> = ({
  onClick
}) => {
  const [name, setName] = useState('Adam Szekrényes');

  useEffect(() => {
    changeLogo()
    window.addEventListener('resize', changeLogo)
  })

  const changeLogo = () => {
    if(window.innerWidth > 600) setName('Adam Szekrényes');
    else setName('adam');
  }

  const toTheTop = () => {
    onClick()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <a 
      className={styles.logo}
      onClick={toTheTop}
      href="#home"
    >
      {name}
    </a>
  )
}

export default Logo;