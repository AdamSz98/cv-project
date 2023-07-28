import sytles from './ContactCard.module.css';

interface ContactCardProps {
  label: string;
  icon: any;
  redirectFunc?: any;
  info?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  label,
  icon: Icon,
  redirectFunc,
  info
}) => {

  return (
    <div 
      onClick={redirectFunc && redirectFunc} 
      className={sytles.card}
    >
      <Icon className={sytles.icon} />
      <p>{label}</p>
      {info && <p>{info}</p>}
    </div>
  )
}

export default ContactCard;