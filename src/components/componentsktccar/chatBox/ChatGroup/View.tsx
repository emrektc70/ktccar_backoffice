import styles from "./styles.module.scss";
import MenuBar from "../../../MenuBar/View";
import TextField from '@mui/material/TextField';
import Message from "./Message";


type Props = {
  handlePostMessages: VoidFunction;
  handleClickMessage: (e: React.BaseSyntheticEvent) => void;
  message: string;
  messageChat: any
};

const View: React.FC<Props> = ({
  handlePostMessages,
  handleClickMessage,
  message,
  messageChat
}) => {

  return (
    <div>
      <MenuBar />
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.name}>
            Nom du groupe
          </div>

          <div className={styles.leave}>
            Quitter le groupe
          </div>
          <div className={styles.effectif}>
            11/800
          </div>
        </div>
      </div>
      <div className={styles.chat}>
        {
          messageChat.map((messageChat: any) =>
            <Message messageChat={messageChat} />
          )
        }
      </div>
      <div className={styles.messageInput}>
        <div className={styles.contentInput}>
          <TextField
            label="Ecrit t'on message"
            variant="standard"
            onChange={handleClickMessage}
            value={message}
            className={styles.input}
          />
          <div onClick={handlePostMessages}>
            Envoyer
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
