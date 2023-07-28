'use client';

import Card from './Card';
import styles from './Skills.module.css';
import { 
  SiJavascript, SiTypescript, SiCsharp, 
  SiNextdotjs, SiAngular, SiDotnet
} from 'react-icons/si';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([0, 0, 0, 0, 0, 0,]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
    checkScroll();
  }, [loaded])

  const showSkills = () => {
    setSkills([7, 6, 5, 6, 4, 5]);
  }

  const deleteSkills = () => {
    setSkills([0, 0, 0, 0, 0, 0]);
  }
  
  const checkScroll = () => {
    if(window.scrollY >= window.innerHeight * 1.4) {
      if(window.scrollY > window.innerHeight * 2.8) deleteSkills()
      else showSkills();
    } else {
      deleteSkills();
    }
  }
  
  if(loaded){
    window.addEventListener('scroll', checkScroll);
  }


  return (
    <div 
      className={styles.main}
    >
      <h1 className={styles.title}>Skills</h1>
      <h2 className={styles.subtitle}>Programming Languages</h2>
      <div className={styles.container}>
        <Card 
          icon={SiJavascript} 
          label="JavaScript"
          color="#f0dc4e"
          progress={skills[0]}
        />
        <Card 
          icon={SiTypescript} 
          label="TypeScript"
          color="#2f74c0"
          progress={skills[1]}
        />
        <Card 
          icon={SiCsharp} 
          label="C#"
          color="#8864a4"
          progress={skills[2]}
        />
      </div>
      <h2 className={styles.subtitle}>Frameworks</h2>
      <div className={styles.container}>
        <Card 
          icon={SiNextdotjs} 
          label="Next.js"
          color="#000"
          next={true}
          progress={skills[3]}
        />
        <Card 
          icon={SiAngular} 
          label="Angular"
          color="#de002d"
          progress={skills[4]}
        />
        <Card 
          icon={SiDotnet} 
          label="ASP.NET Core"
          color="#8864a4"
          progress={skills[5]}
        />
      </div>
    </div>
  )
}

export default Skills;