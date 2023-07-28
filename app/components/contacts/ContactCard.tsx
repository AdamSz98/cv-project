import sytles from './ContactCard.module.css';

interface ContactCardProps {
  label: string;
  icon: any;
  redirectFunc?: any;
}

const ContactCard: React.FC<ContactCardProps> = ({
  label,
  icon: Icon,
  redirectFunc,
}) => {

  return (
    <div 
      onClick={redirectFunc && redirectFunc} 
      className={sytles.card}
    >
      <Icon className={sytles.icon} />
      <p>{label}</p>
    </div>
  )
}

export default ContactCard;