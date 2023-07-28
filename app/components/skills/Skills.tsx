'use client';

import Card from './Card';
import styles from './Skills.module.css';
import { 
  SiJavascript, SiTypescript, SiCsharp, 
  SiNextdotjs, SiAngular, SiDotnet
} from 'react-icons/si';
import { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([0, 0, 0, 0, 0, 0,]);

  const showSkills = () => {
    setSkills([8, 6, 5, 7, 4, 5]);
  }

  const deleteSkills = () => {
    setSkills([0, 0, 0, 0, 0, 0]);
  }
  
  const checkScroll = () => {
    if(window.scrollY > 1500) {
      if(window.scrollY > 2100) deleteSkills()
      else showSkills();
    } else {
      deleteSkills();
    }
  }
  
  window.addEventListener('scroll', checkScroll);

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