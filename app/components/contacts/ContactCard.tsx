import sytles from './ContactCard.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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