import styles from './Landing.module.css';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className={styles.landing}>
        <Image
          className={styles.backgroundImg} 
          src="/images/city.jpg" 
          alt="city" 
          width={670} 
          height={447} 
        />
      <div className={styles.textContainer}>
        <h1 className={styles.text}>
          Adam, <br/> a passionate junior dev for your consideration.
        </h1>
      </div>
    </div>
  )
}

export default Landing;