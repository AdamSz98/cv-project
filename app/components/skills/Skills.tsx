import Card from './Card';
import styles from './Skills.module.css';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiCsharp, SiReact, SiNextdotjs, SiDotnet
} from 'react-icons/si';


const Skills = () => {
  return (
    <section
      className={styles.main}
      id="skillspage"
    >
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <Card 
            icon={SiHtml5} 
            label="HTML"
            color="#e84c24"
          />
          <Card 
            icon={SiCss3} 
            label="CSS"
            color="#289cfc"
          />
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
            icon={SiReact} 
            label="React"
            color="#61dbfb"
          />
          <Card 
            icon={SiNextdotjs} 
            label="Next.js"
            color="#000"
            next={true}
          />
          <Card 
            icon={SiCsharp} 
            label="C#"
            color="#8864a4"
          />
          <Card 
            icon={SiDotnet} 
            label="ASP.NET Core"
            color="#8864a4"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills;