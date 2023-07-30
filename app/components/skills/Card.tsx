import styles from './Card.module.css';

interface CardProps {
  label: string;
  icon: any;
  color: string;
  next?: boolean;
}

const Card: React.FC<CardProps> = ({
  label,
  icon: Icon,
  color,
  next,
}) => {
  return (
    <div className={styles.card}>
      <Icon className={next ? styles.next : styles.icon} style={{color: color}}/>
      <h2 className={styles.label}>{label}</h2>
    </div>
  )
}

export default Card;