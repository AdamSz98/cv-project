import sytles from './ContactCard.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

interface ContactCardProps {
  label: string;
  icon: any;
  redirectFunc?: any;
  type?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  label,
  icon: Icon,
  redirectFunc,
  type,
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
        <div 
          className={sytles.card} 
          onClick={() => {
            toast(`${type} copied!`, {
              icon: '📋',
              duration: 1500
            })
          }}
        >
          <Icon className={sytles.icon} />
          <p>{label}</p>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ContactCard;