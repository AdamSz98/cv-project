import styles from './Landing.module.css';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.backgroundImg} 
          src="/images/city.jpg" 
          alt="city" 
          width={670} 
          height={447} 
        />
      </div>
      <h1 className={styles.text}>Adam, <br/> a passionate junior dev for your consideration.</h1>
    </div>
  )
}

export default Landing;