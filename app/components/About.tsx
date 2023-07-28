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
      <div className={styles.sidebar}>
        <div className={styles.textContainer}>
          <h1 className={styles.secondary}>About</h1>
          <h1 className={styles.primary}>Full-Stack Developer</h1>
          <p className={styles.text}>
            Hello there! My name is <span className={styles.highlight}>Adam Szekrényes</span>, 
            I am a junior full-stack developer, who has recently 
            graduated from Green Fox Academy. 
            I have a huge passion for programming and my skills 
            include developing websites and web applications. 
            My other passions and hobbies are making music, 
            videogame development, and of course, playing videogames. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;