import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Adam Sz</h1>
      </div>
      <div className={styles.linkContainer}>
        <Link href="" className={styles.link}>ABOUT</Link>
        <Link href="" className={styles.link}>SKILLS</Link>
        <Link href="" className={styles.link}>CONTACTS</Link>
      </div>
    </div>
  )
}

export default Navbar;