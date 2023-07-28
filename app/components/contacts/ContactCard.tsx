import sytles from './ContactCard.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  if(redirectFunc) {
    return (
      <div 
        onClick={redirectFunc} 
        className={sytles.card}
      >
        <Icon className={sytles.icon} />
        <p>{label}</p>
      </div>
    )
  } else {
    return (
      <CopyToClipboard text={label}>
        <div className={sytles.card}>
          <Icon className={sytles.icon} />
          <p>{label}</p>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ContactCard;