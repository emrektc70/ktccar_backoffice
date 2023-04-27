import styles from "./styles.module.scss";
import MenuBar from "../MenuBar/View";
import { TextField, Button } from "@material-ui/core";

type Props = {};

const View: React.FC<Props> = () => {
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
          <label className={styles.labelName}>Nom </label>
          <TextField type="text" className={styles.inputProfil} />
        </div>
        <div className={styles.firstName}>
          <label className={styles.labelName}>Prénom </label>
          <TextField type="text" className={styles.inputProfil} />
        </div>
        <div className={styles.email}>
          <label className={styles.labelName}>Email </label>
          <TextField type="text" className={styles.inputProfil} />
        </div>
        <Button variant="outlined" className={styles.button}>
          Modifier
        </Button>
      </div>
    </div>
  );
};

export default View;
