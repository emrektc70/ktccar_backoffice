import styles from "./styles.module.scss";
import MenuBar from "../../../MenuBar/View";
import TextField from '@mui/material/TextField';


type Props = {};

const View: React.FC<Props> = () => {
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

      <div className={styles.messageInput}>
        <TextField
          label="Ecrit t'on message"
          //defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </div>
  );
};

export default View;
