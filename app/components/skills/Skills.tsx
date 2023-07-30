import Card from './Card';
import styles from './Skills.module.css';
import { 
  SiJavascript, SiTypescript, SiCsharp, 
  SiNextdotjs, SiAngular, SiDotnet
} from 'react-icons/si';


const Skills = () => {
  return (
    <div 
      className={styles.main}
      id="skillspage"
    >
      <h1 className={styles.title}>Skills</h1>
      <h2 className={styles.subtitle}>Programming Languages</h2>
      <div className={styles.container}>
        <Card 
          icon={SiJavascript} 
          label="JavaScript"
          color="#f0dc4e"
        />
        <Card 
          icon={SiTypescript} 
          label="TypeScript"
          color="#2f74c0"
        />
        <Card 
          icon={SiCsharp} 
          label="C#"
          color="#8864a4"
        />
      </div>
      <h2 className={styles.subtitle}>Frameworks</h2>
      <div className={styles.container}>
        <Card 
          icon={SiNextdotjs} 
          label="Next.js"
          color="#000"
          next={true}
        />
        <Card 
          icon={SiAngular} 
          label="Angular"
          color="#de002d"
        />
        <Card 
          icon={SiDotnet} 
          label="ASP.NET Core"
          color="#8864a4"
        />
      </div>
    </div>
  )
}

export default Skills;