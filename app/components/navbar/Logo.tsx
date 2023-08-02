import styles from './Logo.module.css';

interface LogoProps {
  onClick: any;
}

const Logo: React.FC<LogoProps> = ({
  onClick
}) => {

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
      Adam Szekrényes
    </a>
  )
}

export default Logo;