import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img} 
          src="/images/me.jpg"
          alt=""
          width={5482}
          height={3647}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.secondary}>About</h1>
        <h1 className={styles.primary}></h1>
        <p className={styles.text}>

        </p>
      </div>

    </div>
  )
}

export default About;