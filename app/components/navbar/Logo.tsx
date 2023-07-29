import styles from './Logo.module.css';

interface LogoProps {
  onClick: any;
  href: string;
}

const Logo: React.FC<LogoProps> = ({
  onClick,
  href
}) => {
  return (
    <a 
      className={styles.logo}
      onClick={onClick}
      href={href}
    >
      Adam Sz
    </a>
  )
}

export default Logo;