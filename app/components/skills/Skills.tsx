import Card from './Card';
import styles from './Skills.module.css';
import { 
  SiJavascript, SiTypescript, SiCsharp, 
  SiNextdotjs, SiAngular, SiDotnet
} from 'react-icons/si';


const Skills = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.container}>
        <Card 
          icon={SiJavascript} 
          label="JavaScript"
          style="js"
        />
        <Card 
          icon={SiTypescript} 
          label="TypeScript"
          style="ts"
        />
        <Card 
          icon={SiCsharp} 
          label="C#"
          style="cs"
        />
        <Card 
          icon={SiNextdotjs} 
          label="Next.js"
          style="nx"
        />
        <Card 
          icon={SiAngular} 
          label="Angular"
          style="an"
        />
        <Card 
          icon={SiDotnet} 
          label="ASP.NET Core"
          style="dn"
        />
      </div>
    </div>
  )
}

export default Skills;