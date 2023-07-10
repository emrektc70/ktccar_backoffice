import styles from "./styles.module.scss";
import PersonIcon from '@mui/icons-material/Person';


type Props = {
  messageChat: any;
  checkMessage: boolean
};

const View: React.FC<Props> = ({ messageChat, checkMessage }) => {
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
      </div>
    </div >
  )
};

export default View;
