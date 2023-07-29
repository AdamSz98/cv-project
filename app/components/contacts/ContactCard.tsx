import sytles from './ContactCard.module.css';
import { toast } from 'react-hot-toast';

interface ContactCardProps {
  label: string;
  icon: any;
  url?: string;
  type?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  label,
  icon: Icon,
  url,
  type,
}) => {

  if(url) {
    return (
      <a
        target="_blank"
        href={url}
        className={sytles.card}
      >
        <Icon className={sytles.icon} />
        <p>{label}</p>
      </a>
    )
  } else {
    return (
      <div 
        className={sytles.card} 
        onClick={() => {
          navigator.clipboard.writeText(label)
          toast(`${type} copied!`, {
            icon: '📋',
            duration: 1500
          })
        }}
      >
        <Icon className={sytles.icon} />
        <p>{label}</p>
      </div>
    )
  }
}

export default ContactCard;