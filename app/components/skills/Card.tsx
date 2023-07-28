import styles from './Card.module.css';

interface CardProps {
  label: string;
  icon: any;
  color: string;
  next?: boolean;
  progress: number;
}

const Card: React.FC<CardProps> = ({
  label,
  icon: Icon,
  color,
  next,
  progress
}) => {
  return (
    <div className={styles.card}>
      <Icon className={next ? styles.next : styles.icon} style={{color: color}}/>
      <h2 className={styles.label}>{label}</h2>
      <div className={styles.container}>
        <div 
          className={styles.progress} 
          style={
            next? {background: '#222021', width: `${progress * 10}%`, margin: '0 0 0 -1px'} : 
            {background: color, width: `${progress * 10}%`}
          }
        />
      </div>
    </div>
  )
}

export default Card;