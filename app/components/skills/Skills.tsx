import Card from './Card';
import styles from './Skills.module.css';
import { SiJavascript } from 'react-icons/si'

const Skills = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.container}>
        <Card 
          icon={SiJavascript} 
          label="Javascript"
          style="js"
        />
      </div>
    </div>
  )
}

export default Skills;