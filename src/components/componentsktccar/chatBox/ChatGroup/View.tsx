/* eslint-disable jsx-a11y/alt-text */
import styles from "./styles.module.scss";
import MenuBar from "../../../MenuBar";
import TextField from '@mui/material/TextField';
import Message from "./Message";
import { Button } from "@mui/material";
import notmessage from './assets/notsms.jpg'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import information from "./assets/i.svg"

type Props = {
  handlePostMessages: VoidFunction;
  handleClickMessage: (e: React.BaseSyntheticEvent) => void;
  message: string;
  messageChat: any;
  effective: number;
  capacity: number;
  groupName: string;
  isOpen: boolean;
  handleClickPopup: VoidFunction;
  createDate: string | number;
  nameCreatePersonne: string
};

const View: React.FC<Props> = ({
  handlePostMessages,
  handleClickMessage,
  message,
  messageChat,
  effective,
  capacity,
  groupName,
  isOpen,
  handleClickPopup,
  createDate,
  nameCreatePersonne
}) => {

  return (
    <div>
      <MenuBar />
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.name}>
            Groupe: {groupName}
          </div>
          <div className={styles.effectif}>
            Effectif: {effective}/{capacity}
          </div>
          <div>
            <div onClick={handleClickPopup} className={styles.iconInfo}>
              <img src={information} width={24} height={24} />
            </div>
            <Dialog open={isOpen} onClose={handleClickPopup}>
              <DialogTitle>Infortmation du groupe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Nom du groupe: {groupName}
                </DialogContentText>
                <DialogContentText>
                  Nombre de personne: {effective}
                </DialogContentText>
                <DialogContentText>
                  Capacite du groupe: {capacity}
                </DialogContentText>
                <DialogContentText>
                  Crée le: {createDate}
                </DialogContentText>
                <DialogContentText>
                  Créer par: {nameCreatePersonne} (admin)
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClickPopup}>Fermer</Button>
              </DialogActions>
            </Dialog>  </div>
        </div>
      </div>
      {
        messageChat ?
          <div className={styles.chat}>
            {
              messageChat.map((messageChat: any) =>
                <Message messageChat={messageChat} />
              )
            }
          </div> :
          <div className={styles.notmessage}>
            <img src={notmessage} width={600} height={300} className={styles.imageNotMessage} />
            <div className={styles.styleMessage}>
              Il n'y a pas de message dans le groupe.
            </div>
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
