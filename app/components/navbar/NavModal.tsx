import styles from './NavModal.module.css';

interface NavModalProps {
  onClick: any;
  background: string;
}

const NavModal: React.FC<NavModalProps> = ({
  onClick,
  background
}) => {
  return (
      <ul className={styles[background]}>
        <li className={styles.item}>
          <a 
            href="#about" 
            className={styles.link}
            onClick={() => onClick("about")}
          >ABOUT</a>
        </li>
        <li className={styles.item}>
          <a 
            href="#skills" 
            className={styles.link}
            onClick={() => onClick("skills")}
          >SKILLS</a>
        </li>
        <li className={styles.item}>
          <a 
            href="#contacts" 
            className={styles.link}
            onClick={() => onClick("contacts")}
          >CONTACTS</a>
        </li>
      </ul>
  )
}

export default NavModal;