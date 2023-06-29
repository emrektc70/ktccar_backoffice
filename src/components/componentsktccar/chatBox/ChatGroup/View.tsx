import styles from "./styles.module.scss";
import MenuBar from "../../../MenuBar";
import TextField from '@mui/material/TextField';
import Message from "./Message";
import { Button } from "@mui/material";


type Props = {
  handlePostMessages: VoidFunction;
  handleClickMessage: (e: React.BaseSyntheticEvent) => void;
  message: string;
  messageChat: any;
  effective: number;
  capacity: number
  groupName: string
};

const View: React.FC<Props> = ({
  handlePostMessages,
  handleClickMessage,
  message,
  messageChat,
  effective,
  capacity,
  groupName
}) => {

  return (
    <div>
      <MenuBar />
      <div className={styles.content}>
        <div className={styles.head}>
          {/*  <div>
            <Button variant="text">Retour</Button>
          </div> */}
          <div className={styles.name}>
            Groupe: {groupName}
          </div>
          <div className={styles.effectif}>
            {effective}/{capacity}
          </div>
        </div>
      </div>
      {
        messageChat &&
        <div className={styles.chat}>
          {
            messageChat.map((messageChat: any) =>
              <Message messageChat={messageChat} />
            )
          }
        </div>
      }
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
            <Button variant="outlined">Envoyer</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
