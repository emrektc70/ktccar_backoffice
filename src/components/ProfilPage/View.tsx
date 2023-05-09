import styles from "./styles.module.scss";
import MenuBar from "../MenuBar/View";
import { TextField, Button } from "@material-ui/core";

type Props = {
  handleClickSignOut: VoidFunction;
  userName: string;
  lastName: string;
  firstName: string

};

const View: React.FC<Props> = ({ handleClickSignOut, userName, lastName, firstName }) => {
  return (
    <div className={styles.profilPage}>
      <div>
        <MenuBar />
      </div>
      <div className={styles.title}>
        <h2>Mon profil </h2>
      </div>
      <div className={styles.form}>
        <div className={styles.name}>
          <label className={styles.labelName}>Nom d'utilisateur </label>
          <TextField type="text" className={styles.inputProfil} value={userName} />
        </div>
        <div className={styles.email}>
          <label className={styles.labelName}>Nom </label>
          <TextField type="text" className={styles.inputProfil} value={lastName} />
        </div>
        <div className={styles.firstName}>
          <label className={styles.labelName}>Prénom </label>
          <TextField type="text" className={styles.inputProfil} value={firstName} />
        </div>
        <div className={styles.btnAction}>
          <Button variant="outlined" className={styles.button} onClick={undefined}>
            Modifier
          </Button>
          <Button variant="contained" className={styles.button} onClick={handleClickSignOut}>
            se déconnecter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default View;
