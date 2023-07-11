import styles from "./styles.module.scss";
import PersonIcon from '@mui/icons-material/Person';


type Props = {
  messageChat: any;
  checkMessage: boolean
  heure: number;
  minute: number
};

const View: React.FC<Props> = ({
  messageChat,
  checkMessage,
  heure,
  minute
}) => {
  return (
    <div className={[!checkMessage ? styles.contentMessage : styles.contentMessageUser].join(' ')}>
      <div className={[!checkMessage ? styles.messageBox : styles.messageBoxUser].join(' ')}>
        <div className={styles.user}>
          <PersonIcon className={[checkMessage ? styles.person : styles.personCheck].join(' ')} />
          <div className={[checkMessage ? styles.userName : styles.userNameCheck].join(' ')}>
            {messageChat.user.username}
          </div>
        </div>
        <div className={[checkMessage ? styles.message : styles.messageCheck].join(' ')}>
          {messageChat.message}
        </div>
        <div className={styles.hoursBox}>
          Envoyé a {heure} : {minute}
        </div>
      </div>
    </div >
  )
};

export default View;
