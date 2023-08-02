import styles from './Logo.module.css';

const Logo = () => {

  const toTheTop = () => {
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
      Adam Szekrényes
    </a>
  )
}

export default Logo;