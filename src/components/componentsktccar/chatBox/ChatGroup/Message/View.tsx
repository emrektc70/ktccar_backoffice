import styles from "./styles.module.scss";
import PersonIcon from '@mui/icons-material/Person';


type Props = {
  messageChat: any
};

const View: React.FC<Props> = ({ messageChat }) => {

  return (
    <div className={styles.contentMessage}>
      <div className={styles.messageBox}>
        <div className={styles.user}>
          <PersonIcon />
          <div>
            {messageChat.user.username}
          </div>
        </div>
        <div className={styles.message}>
          {messageChat.message}
        </div>
      </div>
    </div >
  )
};

export default View;
