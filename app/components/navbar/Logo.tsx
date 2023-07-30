import styles from './Logo.module.css';

interface LogoProps {
  href: string;
}

const Logo: React.FC<LogoProps> = ({
  href
}) => {
  return (
    <a 
      className={styles.logo}
      href={href}
    >
      Adam Szekrényes
    </a>
  )
}

export default Logo;