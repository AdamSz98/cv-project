'use client';

import ContactCard from './ContactCard';
import styles from './Contacts.module.css';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail, MdPhoneAndroid } from 'react-icons/md';
import MusicPlayer from './MusicPlayer';

const Contacts = () => {
  const linkedIn = "https://www.linkedin.com/in/%C3%A1d%C3%A1m-szekr%C3%A9nyes-773046216/";
  const github = "https://github.com/AdamSz98";

  return (
    <div className={styles.main} id="contactspage">
      <div className={styles.imgContainer}>
        <Image 
          className={styles.img}
          src="/images/bg2.jpg"
          alt="bp"
          width={4500}
          height={3000}
        />
        <MusicPlayer />
      </div>
      <div className={styles.container}>
        <h1>Contact me!</h1>
        <div className={styles.contacts}>
          <ContactCard 
            icon={AiFillLinkedin} 
            label="LinkedIn"
            url={linkedIn}
          />
          <ContactCard 
            icon={AiFillGithub} 
            label="Github"
            url={github}
          />
          <ContactCard 
            icon={MdEmail} 
            label="szekrenyes.adam98@gmail.com"
            type="Email"
          />
          <ContactCard 
            icon={MdPhoneAndroid}
            label="+36304470959"
            type="Phone number"
          />
        </div>
      </div>
    </div>
  )
}

export default Contacts;