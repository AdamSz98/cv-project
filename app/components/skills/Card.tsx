import styles from './Card.module.css';

interface CardProps {
  label: string;
  icon: any;
  style: string;
}

const Card: React.FC<CardProps> = ({
  label,
  icon: Icon,
  style
}) => {
  return (
    <div className={styles.card}>
      <Icon className={styles[style]}/>
      <h2 className={styles.label}>{label}</h2>
    </div>
  )
}

export default Card;