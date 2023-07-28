import styles from './Contacts.module.css';
import Image from 'next/image';

const Contacts = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image 
          className={styles.img}
          src="/images/bg2.jpg"
          alt="bp"
          width={4500}
          height={3000}
        />
      </div>
      <div className={styles.contacts}>
        <h1>Contact me!</h1>
        
      </div>
    </div>
  )
}

export default Contacts;